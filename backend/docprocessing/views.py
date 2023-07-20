# Create your views here.
from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
    )
from rest_framework.viewsets import GenericViewSet
from .models import Course, Assignment
from .serializer import CourseSerializer, AssignmentSerializer

class CourseViewSet(
    GenericViewSet, CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

class AssignmentViewSet(
    GenericViewSet, CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()


from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

class AssignmentForCourseViewSet(APIView):
    # serializer_class = AssignmentSerializer
    # queryset = Assignment.objects.all()


    def get(self, request, course_code):
        try:
            # Retrieve all books from the database
            assignments = assignments.objects.get(course_code=course_code)

            response = Response(assignments.data)

            # Add the custom header
            response['Assignments'] = 'Assignments Found'

            return response
            
        except Exception as e:
            return Response({'error': 'No Assignments Found For this Course'}, status=status.HTTP_404_NOT_FOUND)
        
