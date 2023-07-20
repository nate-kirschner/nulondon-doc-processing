# Create your views here.
from .models import Course
from django.http import HttpResponse
from django.core import serializers


def courses(request):
    courses = Course.objects.all()
    ser_obj = serializers.serialize('json', courses)
    response = HttpResponse(ser_obj, headers={
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'GET, POST'
    })
    return response
