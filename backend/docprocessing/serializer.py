from rest_framework.serializers import ModelSerializer
from .models import Course, Assignment

class CoursesPreviewSerializer(ModelSerializer):
    """ Converts instance of Assignment to JSON
    """
    class Meta:
        model = Course
        fields = ('title', 'course_code')


class AssignmentSerializer(ModelSerializer):
    """ Converts instance of Assignment to JSON
    """
    class Meta:
        model = Assignment
        fields = ('ae', 'activity', 'weight', 'duration',
        'length', 'course_code')
        
 ## TODO add serializes for rest of models       