from django.contrib import admin
from .models import Course, Assignment, LearningOutcomes, Prereq, Coreq

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
        'overview',
        'learning_outcomes',
        'teaching_learning',
        'assessment_desc',
        'feedback',
        'readings',
        'topics'
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

class LOAdmin(admin.ModelAdmin):
    list_display = (
        'code', 
        'type',
        'text_desc',
        'course_code'
    )

class PrereqAdmin(admin.ModelAdmin):
    list_display = (
        'course',
        'prereq'
    )

class CoreqAdmin(admin.ModelAdmin):
    list_display = (
        'course',
        'coreq'
    )

# Register your models here.
admin.site.register(Course, CourseAdmin)
admin.site.register(Assignment, AssignmentAdmin)
admin.site.register(LearningOutcomes, LOAdmin)
admin.site.register(Prereq, PrereqAdmin)
admin.site.register(Coreq, CoreqAdmin)