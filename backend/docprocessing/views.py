# Create your views here.
from .models import Course, Templates, Assessment, LearningOutcomes
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from django.core import serializers
from django.core.paginator import Paginator
import json

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


def assessments(request, pk):
    assessment = get_object_or_404(Assessment, pk=pk)

    json_string = json.dumps(model_to_dict(assessment))
    response = HttpResponse(json_string, headers=HEADERS)
    return response

# Returns a list of learning outcomes given a course code


def learning_outcomes(request, course_code):
    learning_outcomes = LearningOutcomes.objects.filter(
        course_code=course_code)
    return createHTTPResponse(learning_outcomes)

# Returns a list of courses


def courses(request):
    courses = Course.objects.all()
    output = []

    for course in courses:
        course_with_assessments = {}
        course_assessments = Assessment.objects.filter(
            course_code=course.course_code)
        course_assessments_list = list(
            course_assessments.values('id', 'activity'))

        for assessment in course_assessments_list:
            templates_for_assessment = Templates.objects.filter(course_code=course.course_code,
                                                                assessment_key=assessment['id'])
            assessment['versions'] = list(
                templates_for_assessment.values_list('version', flat=True))

        course_with_assessments['title'] = course.title
        course_with_assessments['code'] = course.course_code
        course_with_assessments['assessments'] = course_assessments_list
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
        course_assessments = Assessment.objects.filter(
            course_code=course.course_code)
        course_assessments_list = list(
            course_assessments.values('id', 'activity'))

        for assessment in course_assessments_list:
            templates_for_assessment = Templates.objects.filter(course_code=course.course_code,
                                                                assessment_key=assessment['id'])
            assessment['versions'] = list(
                templates_for_assessment.values_list('version', flat=True))

        course_with_assessments['title'] = course.title
        course_with_assessments['code'] = course.course_code
        course_with_assessments['assessments'] = course_assessments_list
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
        templates = Templates.objects.filter(course_code=course_code, assessment_key=assessment['id'])
        assessment['versions'] = list(templates.values_list('version', flat=True))
    
    json_string = json.dumps(assessments_list)
    response = HttpResponse(json_string, headers=HEADERS)
    return response


# Returns a template given based of a course code, assessment id and version
def template(request, courseId, assessmentId, version):
    template = Templates.objects.filter(
        version=version, assessment_key=assessmentId, course_code=courseId)
    return createHTTPResponse(template)

# Autofills some fields when creating a new template given a course code and assessment id


def new_version(request, course_code, ae):
    new_v = {}
    course = get_object_or_404(Course, course_code=course_code)
    new_v["title"] = course.title
    new_v["code"] = course.course_code
    new_v["fheq"] = course.fheq_level

    assessment = Assessment.objects.get(course_code=course_code, ae=ae)
    new_v["activity"] = assessment.activity
    new_v["weight"] = assessment.weight
    new_v["ae"] = assessment.ae
    learning_outcomes_list = assessment.learning_outcomes.split(",")
    learning_outcomes_list = list(dict.fromkeys(learning_outcomes_list))
    full_learning_outcomes = []

    for learning_outcome in learning_outcomes_list:
        learning_out = LearningOutcomes.objects.filter(
            code=learning_outcome, course_code=course_code)
        for lo in learning_out:
            full_learning_outcomes.append(model_to_dict(
                lo, fields=["id", "course_code", "text_desc"]))
    new_v["learning_outcomes"] = full_learning_outcomes

    json_string = json.dumps(new_v)
    response = HttpResponse(json_string, headers=HEADERS)
    return response
