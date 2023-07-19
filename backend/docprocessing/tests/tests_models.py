# tests/test_models.py
from django.test import TestCase

from docprocessing.models import Course
from docprocessing.tests.factories import CourseFactory


class CourseModelTest(TestCase):
    def test_str(self):
        course = CourseFactory()
        self.assertEquals(str(course), course.title)