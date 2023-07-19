from rest_framework.serializers import ModelSerializer
from .models import Course

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = ('title', 'course_code', 'discipline', 'uk_credit', 'us_credit',
                   'fheq_level', 'date_approved', 'core_attributes', 'pre_requisites', 'co_requisites')
