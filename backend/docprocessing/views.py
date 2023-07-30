# Create your views here.
from .models import Course, Template, Assessment, LearningOutcome
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from django.core import serializers
from django.core.paginator import Paginator
import json
from django.views.decorators.csrf import csrf_exempt
from .sendEmails import send_email_to_approvers

# Global headers for all responses
HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
    'Access-Control-Allow-Methods': 'GET, POST'
}

# HTTP response helper function: list of Django model objects -> HTTP response


def createHTTPResponse(object):
    ser_obj = serializers.serialize('json', object)
    response = HttpResponse(ser_obj, headers=HEADERS)
    return response

# Returns an assessment object given a primary key


def assessments(request, course_code):
    assessments = Assessment.objects.filter(course_code=course_code)
    assessmentsDict = [model_to_dict(l) for l in assessments]
    for a in assessmentsDict:
        versions = Template.objects.filter(
            course_code_id=course_code, assessment_key_id=a['id'])
        a['versions'] = [l.version for l in versions]

    json_string = json.dumps(assessmentsDict)
    response = HttpResponse(json_string, headers=HEADERS)
    return response

# Returns a list of learning outcomes given a course code


def learning_outcomes(request, course_code):
    learning_outcomes = LearningOutcome.objects.filter(
        course_code=course_code)
    return createHTTPResponse(learning_outcomes)

# Returns a list of courses


def courses(request):
    courses = Course.objects.all()
    output = []

    for course in courses:
        course_with_assessments = {}
        course_with_assessments['title'] = course.title
        course_with_assessments['code'] = course.course_code

        output.append(course_with_assessments)

    json_string = json.dumps(output)
    response = HttpResponse(json_string, headers=HEADERS)
    return response


def courses_paginated(request, page, pageSize):
    number_of_courses = Course.objects.all().count()
    if page < 1 or page > number_of_courses // pageSize + 1:
        return HttpResponse("Bad page number", status_code=400)

    paginator = Paginator(Course.objects.all(), pageSize)
    courses = paginator.get_page(page)
    output = []

    for course in courses:
        course_with_assessments = {}
        course_with_assessments['title'] = course.title
        course_with_assessments['code'] = course.course_code
        output.append(course_with_assessments)

    dict_response = {
        "total_courses": number_of_courses,
        "courses": output,
    }
    json_string = json.dumps(dict_response)
    response = HttpResponse(json_string, headers=HEADERS)
    return response

# Gets all templates associated with a certain course


def course_templates(request, course_code):
    assessments = Assessment.objects.filter(course_code=course_code)
    assessments_list = list(assessments.values('id', 'activity'))
    for assessment in assessments_list:
        templates = Template.objects.filter(
            course_code=course_code, assessment_key=assessment['id'])
        assessment['versions'] = list(
            templates.values_list('version', flat=True))

    json_string = json.dumps(assessments_list)
    response = HttpResponse(json_string, headers=HEADERS)
    return response


def template(request, courseId, assessmentId, version):
    template = Template.objects.filter(
        version=version, assessment_key=assessmentId, course_code=courseId)
    return createHTTPResponse(template)

# Autofills some fields when creating a new template given a course code and assessment id


def new_version(request, course_code, assessment_id):
    new_v = {}
    course = get_object_or_404(Course, course_code=course_code)
    new_v["title"] = course.title
    new_v["code"] = course.course_code
    new_v["fheq"] = course.fheq_level

    assessment = Assessment.objects.get(
        course_code=course_code, id=assessment_id)
    new_v["activity"] = assessment.activity
    new_v["weight"] = assessment.weight
    new_v["ae"] = assessment.ae
    learning_outcome_codes_list = assessment.learning_outcomes.replace(
        " and ", ",").split(",")
    learning_outcome_codes_list = list(
        dict.fromkeys(learning_outcome_codes_list))
    full_learning_outcomes = []

    for learning_outcome in learning_outcome_codes_list:
        learning_out = LearningOutcome.objects.filter(
            code=learning_outcome, course_code=course_code)
        for lo in learning_out:
            lo = model_to_dict(lo, fields=["id", "text_desc"])
            lo["code"] = learning_outcome
            full_learning_outcomes.append(lo)
    new_v["learning_outcomes"] = full_learning_outcomes

    json_string = json.dumps(new_v)
    response = HttpResponse(json_string, headers=HEADERS)
    return response

# error w/o csrf_exempt
# Forbidden (CSRF cookie not set.): /send-approver-email/
# "POST /send-approver-email/ HTTP/1.1" 403 2870
@csrf_exempt
def send_emails(request):
    """
    This function sends an email to an Approver with a custom link to a Template
    The request body should be formatted: 
     {'ApproverIDs': [], 'TemplateID': int}
    """
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            send_email_to_approvers(data["ApproverIDs"], data["TemplateID"])
        except json.JSONDecodeError:
            return HttpResponse("/send-approver-email recieved invalid JSON", headers=HEADERS)    

    return HttpResponse("/send-approver-email sent email", headers=HEADERS)   



