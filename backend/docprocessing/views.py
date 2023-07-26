# Create your views here.
from .models import Course, Templates, Assessment, LearningOutcomes
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from django.core import serializers
import json

HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
    'Access-Control-Allow-Methods': 'GET, POST'
}

def createHTTPResponse(object):
    ser_obj = serializers.serialize('json', object)
    response = HttpResponse(ser_obj, headers=HEADERS)
    return response


def assessments(request, pk):
    assessment = get_object_or_404(Assessment, pk=pk)

    json_string = json.dumps(model_to_dict(assessment))
    response = HttpResponse(json_string, headers=HEADERS)
    return response

def learning_outcomes(request, course_code):
    learning_outcomes = LearningOutcomes.objects.filter(course_code=course_code)
    return createHTTPResponse(learning_outcomes)

def courses(request):
    courses = Course.objects.all()
    output = []

    for course in courses:
        course_with_assessments = {}
        course_assessments = Assessment.objects.filter(course_code=course.course_code)
        course_assessments_list = list(course_assessments.values('id', 'activity'))

        for assessment in course_assessments_list:
            templates_for_assessment = Templates.objects.filter(course_code=course.course_code, 
                                                              assessment_key=assessment['id'])
            assessment['versions'] = list(templates_for_assessment.values_list('version', flat=True))

        course_with_assessments['title'] = course.title
        course_with_assessments['code'] = course.course_code
        course_with_assessments['assessments'] = course_assessments_list
        output.append(course_with_assessments)

    json_string = json.dumps(output)
    response = HttpResponse(json_string, headers=HEADERS)
    return response

def courses_paginated(request, page):
    PAGE_SIZE = 20

    number_of_courses = Course.objects.all().count()
    if page < 1 or page > number_of_courses // PAGE_SIZE + 1:
        return HttpResponse("Bad page number", status_code=400)

    courses = Course.objects.all()[(page-1)*PAGE_SIZE:min(page*PAGE_SIZE, number_of_courses)]
    output = []

    for course in courses:
        course_with_assessments = {}
        course_assessments = Assessment.objects.filter(course_code=course.course_code)
        course_assessments_list = list(course_assessments.values('id', 'activity'))

        for assessment in course_assessments_list:
            templates_for_assessment = Templates.objects.filter(course_code=course.course_code, 
                                                              assessment_key=assessment['id'])
            assessment['versions'] = list(templates_for_assessment.values_list('version', flat=True))

        course_with_assessments['title'] = course.title
        course_with_assessments['code'] = course.course_code
        course_with_assessments['assessments'] = course_assessments_list
        output.append(course_with_assessments)

    json_string = json.dumps(output)
    response = HttpResponse(json_string, headers=HEADERS)
    return response


def template(request, courseId, assessmentId, version):
    template = Templates.objects.filter(
        version=version, assessment_key=assessmentId, course_code=courseId)
    return createHTTPResponse(template)
