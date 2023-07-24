# Create your views here.
from .models import Course, Assignment, LearningOutcomes
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from django.core import serializers
import json


def courses(request):
    courses = Course.objects.all()
    output = []

    for course in courses:
        course_with_assignments = {}
        course_assignments = Assignment.objects.filter(course_code=course.course_code)
        course_assignemnts_list = list(course_assignments.values('id', 'activity'))
        course_with_assignments['title'] = course.title
        course_with_assignments['code'] = course.course_code
        course_with_assignments['assessments'] = course_assignemnts_list
        output.append(course_with_assignments)
    
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }

    json_string = json.dumps(output)
    response = HttpResponse(json_string, headers=headers)
    return response


def assignments(request, pk):
    assignment = get_object_or_404(Assignment, pk=pk)
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }

    json_string = json.dumps(model_to_dict(assignment))
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


