# Create your views here.
from .models import Course, Templates, Assessment, LearningOutcomes
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from django.core import serializers
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
    learning_outcomes = LearningOutcomes.objects.filter(course_code=course_code)
    return createHTTPResponse(learning_outcomes)

# Returns a list of courses
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


# Returns a template given based of a course code, assessment id and version
def template(request, courseId, assessmentId, version):
    template = Templates.objects.filter(
        version=version, assessment_key=assessmentId, course_code=courseId)
    return createHTTPResponse(template)

# Autofills some fields when creating a new template given a course code and assessment id
def new_version(request, c_code, ae):
    new_v = {}
    course = get_object_or_404(Course, course_code=c_code)
    new_v["title"] = course.title
    new_v["code"] = course.course_code
    new_v["fheq"] = course.fheq_level

    assessment = Assessment.objects.get(course_code=c_code, ae=ae)
    new_v["activity"] = assessment.activity
    new_v["weigth"] = assessment.weight
    learning_outcomes_list = assessment.learning_outcomes.split(",")
    full_learning_outcomes = []
    for learning_outcome in learning_outcomes_list:
        lo = LearningOutcomes.objects.get(code=learning_outcome, course_code=c_code,fields=['code','text_desc'])
        full_learning_outcomes.append(model_to_dict(lo)) 
    new_v["learning_outcomes"] = full_learning_outcomes


    json_string = json.dumps(new_v)
    response = HttpResponse(json_string, headers=HEADERS)
    return response
  

