from .models import Course, Assignment, LearningOutcomes, Approval
from .models import Course, Assignment, LearningOutcomes, Approval, Templates
from django.contrib import admin


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
        'course_code',
        'learning_outcomes'
    )


class LOAdmin(admin.ModelAdmin):
    list_display = (
        'code',
        'type',
        'text_desc',
        'course_code'
    )


class ApprovalAdmin(admin.ModelAdmin):
    list_display = (
        'version_num',
        'date_approved',
        'date_published',
        'owner',
        'next_review_date',
        'mod_cat_num',
        'approved_by',
        'location',
        'course_code'
    )


class TemplatesAdmin(admin.ModelAdmin):
    list_display = (
        'version',
        'assignment_key',
        'course_code',
        'template'
    )


# Register your models here.
admin.site.register(Course, CourseAdmin)
admin.site.register(Assignment, AssignmentAdmin)
admin.site.register(LearningOutcomes, LOAdmin)
admin.site.register(Approval, ApprovalAdmin)
admin.site.register(Templates, TemplatesAdmin)
