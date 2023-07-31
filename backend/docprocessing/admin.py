from .models import Course, Assessment, LearningOutcome, Approval, Template, Approver, ApproverTemplate
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


class AssessmentAdmin(admin.ModelAdmin):
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


class TemplateAdmin(admin.ModelAdmin):
    list_display = (
        'version',
        'assessment_key',
        'course_code',
        'template',
        'status',
    )

class ApproverAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'email',
        'hashed_email'
    )

class ApproverTemplateAdmin(admin.ModelAdmin):
    list_display = (
        'approverID',
        'templateID',
    )


# Register your models here.
admin.site.register(Course, CourseAdmin)
admin.site.register(Assessment, AssessmentAdmin)
admin.site.register(LearningOutcome, LOAdmin)
admin.site.register(Approval, ApprovalAdmin)
admin.site.register(Template, TemplateAdmin)
admin.site.register(Approver, ApproverAdmin)
admin.site.register(ApproverTemplate, ApproverTemplateAdmin)
