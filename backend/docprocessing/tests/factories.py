# tests/factories.py
from factory.django import DjangoModelFactory
from factory import Faker

from docprocessing.models import Course

#test factory
def CourseFactory(DjangoModelFactory):
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