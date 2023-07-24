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
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }

    json_string = json.dumps(model_to_dict(assessment))
    response = HttpResponse(json_string, headers=headers)
    return response

def learning_outcomes(request, course_code):
    learning_outcomes = LearningOutcomes.objects.filter(course_code=course_code)
    ser_obj = serializers.serialize("json", learning_outcomes)

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }

    json_string = json.dumps(ser_obj)
    response = HttpResponse(json_string, headers=headers)
    return response


def courses(request):
    courses = Course.objects.all()
    output = []

    for course in courses:
        course_with_assessments = {}
        course_assessments = Assessment.objects.filter(course_code=course.course_code)
        course_assignemnts_list = list(course_assessments.values('id', 'activity'))
        course_with_assessments['title'] = course.title
        course_with_assessments['course_code'] = course.course_code
        course_with_assessments['assessments'] = course_assignemnts_list
        output.append(course_with_assessments)
    
 

    json_string = json.dumps(output)
    response = HttpResponse(json_string, headers=HEADERS)
    return response


def template(request, courseId, assessmentId, version):
    template = Templates.objects.filter(
        version=version, assessment_key=assessmentId, course_code=courseId)
    return createHTTPResponse(template)
