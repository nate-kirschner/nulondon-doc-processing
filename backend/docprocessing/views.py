# Create your views here.
from django.http import HttpResponse
from django.core import serializers

from .models import Course
from .models import Assignment
from .models import LearningOutcomes


def courses(request):
    courses = Course.objects.all()
    ser_obj = serializers.serialize('json', courses)
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }
    response = HttpResponse(ser_obj, headers=headers)
    return response

def all_assignemnts(request):
    assignments = Assignment.objects.all()
    ser_obj = serializers.serialize('json', assignments)
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }
    response = HttpResponse(ser_obj, headers=headers)
    return response

def assignments(request, course_code):
    assignments = Assignment.objects.filter(course_code=course_code)
    ser_obj = serializers.serialize('json', assignments)
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }
    response = HttpResponse(ser_obj, headers=headers)
    return response

def learning_outcomes(request, course_code):
    learning_outcomes = LearningOutcomes.objects.filter(course_code=course_code)
    ser_obj = serializers.serialize('json', learning_outcomes)
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }
    response = HttpResponse(ser_obj, headers=headers)
    return response