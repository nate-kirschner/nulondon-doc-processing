# Create your views here.
from .models import Course
from django.http import HttpResponse
from django.core import serializers


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

