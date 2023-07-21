from rest_framework.serializers import ModelSerializer
from rest_framework import generics

from .models import Course
from .models import Assignment
from .models import LearningOutcomes

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = ('title', 'course_code', 'discipline', 'uk_credit', 'us_credit',
                  'fheq_level', 'date_approved', 'core_attributes', 'pre_requisites', 'co_requisites')
        
class AssignemntSerializer(ModelSerializer):
    class Meta:
        model = Assignment
        fields = ('ae', 'activity', 'weight', 'duration', 'length', 'course_code')


class LearningOutcomesSerializer(ModelSerializer):
    class Meta:
        model = LearningOutcomes
        fields = ('code', 'type', 'text_desc', 'course_code')

# class AssignemntsListSerializer(generics.ListAPIView):
#     assign_serializer = AssignemntSerializer
#     def get_queryset(self):
#         course_code = self.kwargs['course_code']
#         return Assignment.objects.filter(course_code=course_code)
