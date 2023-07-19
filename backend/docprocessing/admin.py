from django.contrib import admin
from .models import Course
from .models import Assignment

class CourseAdmin(admin.ModelAdmin):
    list_display = (
        'title', 
        'course_code',
        'discipline',
        'uk_credit',
        'us_credit',
        'fheq_level',
        'date_approved',
        'core_attributes',
        'pre_requisites',
        'co_requisites',
    )    

class AssignmentAdmin(admin.ModelAdmin):
    list_display = (
        'ae', 
        'activity',
        'weight',
        'duration',
        'length',
        'course_code'
    )    

# Register your models here.
admin.site.register(Course, CourseAdmin)
admin.site.register(Assignment, AssignmentAdmin)