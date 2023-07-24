# Create your views here.
from .models import Course, Templates
from django.http import HttpResponse
from django.core import serializers


def createHTTPResponse(object):
    ser_obj = serializers.serialize('json', object)
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }
    response = HttpResponse(ser_obj, headers=headers)
    return response


def courses(request):
    courses = Course.objects.all()
    return createHTTPResponse(courses)


def template(request, courseId, assignmentId, version):
    template = Templates.objects.filter(
        version=version, assignment_key=assignmentId, course_code=courseId)
    return createHTTPResponse(template)
