from django.shortcuts import render

# Create your views here.
from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
    )
from rest_framework.viewsets import GenericViewSet
from .models import Course
from .serializer import CourseSerializer

class CourseViewSet(
    GenericViewSet, CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()