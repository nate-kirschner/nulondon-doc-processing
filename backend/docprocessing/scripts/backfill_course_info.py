import sys
sys.path.append("/Users/jonathanchen/nulondon-doc-processing/backend")

import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

import argparse
import logging
import requests
from datetime import datetime
from bs4 import BeautifulSoup

import django
django.setup()

from docprocessing.models import Course, Assignment, LearningOutcomes

now = datetime.now().strftime("%d-%m-%y_%H:%M:%S")

logger = logging.getLogger("backend.scripts.backfill_course_info_script")
logger.setLevel(logging.DEBUG)
file_handler = logging.FileHandler(f"docprocessing/scripts/logs/backfill_courses_{now}.log")
file_handler.setLevel(logging.DEBUG)
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.DEBUG)
formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
file_handler.setFormatter(formatter)
console_handler.setFormatter(formatter)
logger.addHandler(file_handler)
logger.addHandler(console_handler)

ROOT_URL = "https://www.nulondon.ac.uk/academic-handbook/programme-specifications-and-handbooks/undergraduate-programmes/"
HEADERS = {"user-agent": "Mozilla/5.0"}
COURSE_URLS = set()

def find_urls(url, execute):
    response = requests.get(url, headers={"user-agent": "Mozilla/5.0"})
    soup = BeautifulSoup(response.text, "html.parser")
    if soup.body.has_attr('class') and 'academic-handbook-template-default' in soup.body['class'] and url not in COURSE_URLS:
        logger.info(f"Added {url} to COURSE_URLS. (execute={execute})")
        COURSE_URLS.add(url)
        return
    links = [link.get('href') for link in list(filter(lambda x: x.get('href') and x.get('href').startswith('https://www.nulondon.ac.uk/academic-handbook/programme-specifications-and-handbooks/') and x.get('href') not in COURSE_URLS, soup.find_all('a')))]
    for l in links:
        find_urls(l, execute)

class ScrapingHelpers:
    @staticmethod
    def scrape_property_table(soup, row):
        property_table = soup.find_all('table')[0]
        for tr in property_table.find_all('tr'):
            data = tr.find_all('td')
            row[data[0].text] = data[1].text
            if len(data) > 2:
                try:
                    row[data[2].text] = data[3].text
                except:
                    logger.error("Malformed property table, skipping for now.")
    
    @staticmethod
    def scrape_learning_outcomes(soup, row):
        outcomes_list = []
        outcomes_tables = soup.find_all('table')[1:4]
        for table in outcomes_tables:
            for tr in table.find_all('tr'):
                data = tr.find_all('td')
                outcomes_list.append((data[0].text, data[1].text))
        row["Learning Outcomes"] = outcomes_list

    @staticmethod
    def scrape_text_fields(soup, row):
        TEXT_FIELDS = set(["Course Overview","Feedback"])
        sections = list(filter(lambda x: x.h2 and x.h2.text in TEXT_FIELDS, soup.find_all('section')))
        for section in sections:
            row[section.h2.text] = section.text

    @staticmethod
    def scrape_list_fields(soup, row):
        LIST_FIELDS = set(["Indicative Reading","Indicative Topics"])
        sections = list(filter(lambda x: x.h2 and x.h2.text in LIST_FIELDS, soup.find_all('section')))
        for section in sections:
            items = []
            for li in section.find_all('li'):
                items.append(li.text)
            row[section.h2.text] = items

    @staticmethod
    def scrape_teaching_learning(soup, row):
        SECTION_TITLE = "Teaching and Learning"
        section = list(filter(lambda x: x.h2 and x.h2.text in SECTION_TITLE, soup.find_all('section')))[0]
        row[SECTION_TITLE] = section.text

    @staticmethod
    def scrape_assessments(soup, row):
        table = soup.find_all("div", class_="nch-table-canvas")[-2]
        assessments = []
        for tr in table.find_all("tr")[1:]:
            data = tr.find_all("td")
            assessments.append({
                "AE": data[0].text,
                "Assessment Activity": data[1].text,
                "Weighting": data[2].text,
                "Duration": data[3].text,
                "Length": data[4].text if len(data) > 4 else None,
            })
        row["Assessments List"] = assessments

        SECTION_TITLE = "Assessments"
        section = list(filter(lambda x: x.h2 and x.h2.text in SECTION_TITLE, soup.find_all('section')))[0]
        if section.p:
            row[SECTION_TITLE] = section.p.text

    @staticmethod
    def scrape_course_title(soup, row):
        heading = soup.find("h1")
        title = heading.text.replace("Course Descriptor", "")
        row["Course title"] = title


def scrape_all_course_info(soup):
    row = {}
    ScrapingHelpers.scrape_property_table(soup, row)
    ScrapingHelpers.scrape_text_fields(soup, row)
    ScrapingHelpers.scrape_assessments(soup, row)
    ScrapingHelpers.scrape_learning_outcomes(soup, row)
    ScrapingHelpers.scrape_list_fields(soup, row)
    ScrapingHelpers.scrape_teaching_learning(soup, row)
    ScrapingHelpers.scrape_course_title(soup, row)
    return row

def backfill_course_info(execute, test):
    if not test:
        for year in ('one', 'two', 'three'):
            find_urls(ROOT_URL + f"university-course-list-year-{year}/", execute)
    else:
        COURSE_URLS.clear()
        COURSE_URLS.add('https://www.nulondon.ac.uk/academic-handbook/programme-specifications-and-handbooks/undergraduate-programmes/university-course-list-year-one/data-science/ldsci4211/')
        COURSE_URLS.add('https://www.nulondon.ac.uk/academic-handbook/programme-specifications-and-handbooks/undergraduate-programmes/university-course-list-year-one/business/lbusi4202/')
        COURSE_URLS.add('https://www.nulondon.ac.uk/academic-handbook/programme-specifications-and-handbooks/undergraduate-programmes/university-course-list-year-two/math/lmath5200/')
        COURSE_URLS.add('https://www.nulondon.ac.uk/academic-handbook/programme-specifications-and-handbooks/undergraduate-programmes/university-course-list-year-three/art-and-design/lades6263/')
    logger.info(f"Found {len(COURSE_URLS)} unique course URLs. (execute={execute})")

    for url in COURSE_URLS:
        response = requests.get(url, headers=HEADERS)
        soup = BeautifulSoup(response.text, "html.parser")
        logger.info(f"Scraping course at url: {url}")
        data = scrape_all_course_info(soup)
        logger.info("Scraped info for course {}: {} (execute={})".format(data.get("Course code") or data.get("Course Code"), data.get("Course title"), execute))
        
        lowercase_keys = {}
        for key in data.keys():
            lowercase_keys[key.lower()] = data[key]
        data.update(lowercase_keys)

        created_courses = 0
        created_learning_outcomes = 0
        created_assessments = 0
        if execute:
            lo_stringlist = ",".join([code for code, _ in data.get("Learning Outcomes")])
            _, course_created = Course.objects.get_or_create(
                title=data.get("course title"),
                course_code=data.get("course code"),
                discipline=data.get("discipline"),
                uk_credit=int(data.get("uk credit")),
                us_credit=int(data.get("us credit")),
                fheq_level=int(data.get("fheq level")),
                date_approved=data.get("date approved"),
                core_attributes=data.get("core attributes"),
                pre_requisites=data.get("pre-requisites"),
                co_requisites=data.get("co-requisites"),
                overview=data.get("course overview"),
                learning_outcomes=lo_stringlist,
                teaching_learning=data.get("teaching and learning"),
                assessment_desc=data.get("assessments"),
                feedback=data.get("feedback"),
                readings=data.get("indicative reading"),
                topics=data.get("indicative topics"),
            )
            if course_created:
                created_courses += 1
            for lo_code, lo_desc in data.get("learning outcomes"):
                # lo_type = {
                #     "K": LearningOutcomes.Types.KN_UNDERSTANDING, 
                #     "S": LearningOutcomes.Types.SUB_SPECIFIC,
                #     "J": LearningOutcomes.Types.TRANSFERABLE,
                # }.get(lo_code[0])
                lo_type = lo_code[0]
                _, lo_created = LearningOutcomes.objects.get_or_create(code=lo_code, type=lo_type, text_desc=lo_desc, course_code=data.get("Course code"))
                if lo_created:
                    created_learning_outcomes += 1
            for assessment in data.get("assessments list"):
                _, assessment_created = Assignment.objects.get_or_create(
                    ae=int(assessment.get("AE")),
                    activity=assessment.get("Assessment Activity"),
                    weight=int(assessment.get("Weighting").strip("%")),
                    duration=assessment.get("Duration"),
                    length=assessment.get("Length"),
                    course_code=data.get("course code"),
                    learning_outcomes=lo_stringlist,
                )
                if assessment_created:
                    created_assessments += 1
    logger.info(f"Created {created_courses} Courses, {created_learning_outcomes} LearningOutcomes, and {created_assessments} Assignments. (execute={execute})")

def main():
    parser = argparse.ArgumentParser(description="Backfill course information through webscraping")
    parser.add_argument("--execute", action="store_true", default=False)
    parser.add_argument("--test", action="store_true", default=False)
    args = parser.parse_args()
    backfill_course_info(args.execute, args.test)

if __name__ == "__main__":
    main()
