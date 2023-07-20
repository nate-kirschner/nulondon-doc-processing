from rest_framework.serializers import ModelSerializer
from .models import Course, Assignment

class CourseSerializer(ModelSerializer):
    """ Converts instance of Course to JSON
    """
    class Meta:
        model = Course
        fields = ('title', 'course_code', 'discipline', 'uk_credit', 'us_credit',
                   'fheq_level', 'date_approved', 'core_attributes', 'pre_requisites', 
                   'co_requisites', 'overview', 'learning_outcomes', 'teaching_learning',
                   'assessment_desc', 'feedback', 'readings', 'topics')


class AssignmentSerializer(ModelSerializer):
    """ Converts instance of Assignment to JSON
    """
    class Meta:
        model = Assignment
        fields = ('ae', 'activity', 'weight', 'duration',
        'length', 'course_code')
        
 ## TODO add serializes for rest of models       