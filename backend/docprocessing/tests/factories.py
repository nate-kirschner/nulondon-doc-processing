# tests/factories.py
from factory.django import DjangoModelFactory
from factory import Faker

from docprocessing.models import Course


#test factory
class CourseFactory(DjangoModelFactory):
    title = 'company'
    course_code = 'course_code'
    discipline = 'discipline'
    uk_credit = 4
    us_credit = 5
    fheq_level = 3
    date_approved = 'YYYY-MM-DD'
    core_attributes = 'core_attributes'
    pre_requisites = 'pre_requisites'
    co_requisites = 'co_requisites'
    
    # course_code = Faker('course_code')
    # discipline = Faker('discipline')
    # uk_credit = Faker('uk_credit')
    # us_credit = Faker('us_credit')
    # fheq_level = Faker('fheq_level')
    # date_approved = Faker('date_approved')
    # core_attributes = Faker('core_attributes')
    # pre_requisites = Faker('pre_requisites')
    # co_requisites = Faker('co_requisites')

    class Meta:
        model = Course