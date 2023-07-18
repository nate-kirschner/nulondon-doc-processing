from django.contrib import admin
from .models import Course

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

# Register your models here.
admin.site.register(Course, CourseAdmin)