from django.test import TestCase

# Create your tests here.

# path for model tests
from .models import Course
#need factory-boy to install run: pip install factory-boy
from factory import Faker
from factory.django import DjangoModelFactory


# path for serializer tests
from .models import Course
from .serializer import CourseSerializer

# path for viewset tests
from django.urls import reverse
from rest_framework import status

#test factory
def CoursesFactory(DjangoModelFactory):
    title = Faker('title')
    course_code = Faker('course_code')
    discipline = Faker('discipline')
    uk_credit = Faker('uk_credit')
    us_credit = Faker('us_credit')
    fheq_level = Faker('fheq_level')
    date_approved = Faker('date_approved')
    core_attributes = Faker('core_attributes')
    pre_requisites = Faker('pre_requisites')
    co_requisites = Faker('co_requisites')

    class Meta:
        model = Course

#test model; string representation

class CourseModelTest(TestCase):
    def test_str(self):
        course = Course()
        self.assertEquals(str(course), course.title)