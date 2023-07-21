# Create your views here.
from .models import Course, Assignment
from django.http import HttpResponse
import json


def courses(request):
    courses = Course.objects.all()
    output = []

    for course in courses:
        course_with_assignments = {}
        course_assignments = Assignment.objects.filter(course_code=course.course_code)
        course_assignemnts_list = list(course_assignments.values('id', 'activity'))
        course_with_assignments['title'] = course.title
        course_with_assignments['course_code'] = course.course_code
        course_with_assignments['assignments'] = course_assignemnts_list
        output.append(course_with_assignments)
    
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    }

    json_string = json.dumps(output)
    response = HttpResponse(json_string, headers=headers)
    return response

