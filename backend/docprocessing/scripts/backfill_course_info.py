import argparse
import requests
import numpy as np
import pandas as pd
from bs4 import BeautifulSoup
from docprocessing.models import Course

ROOT_URL = ""
HEADERS = {"user-agent": "Mozilla/5.0"}

def backfill_course_info(execute=False):
    course_urls = set()




def main():
    parser = argparse.ArgumentParser(description="Backfill course information through webscraping")
    parser.add_argument("--execute", action="store_true", default=False)
    args = parser.parse_args()
    backfill_course_info(args.execute)

if __name__ == "__main__":
    main()
