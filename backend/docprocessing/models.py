from django.db import models
from django.utils.translation import gettext_lazy as _


class Course(models.Model):
    """Python Class representaiton of the Courses Table"""
    title = models.CharField(max_length=255)  # eg Global Objects in Context
    course_code = models.CharField(max_length=255, primary_key=True)  # eg LADES5261
    discipline = models.CharField(max_length=255)  # eg Art and Design
    uk_credit = models.IntegerField()
    us_credit = models.IntegerField()
    fheq_level = models.IntegerField()
    date_approved = models.CharField(max_length=255)
    core_attributes = models.CharField(max_length=255)
    # list of course_codes, eg "is2500,cs2500"
    pre_requisites = models.CharField(max_length=255)
    # list of course_codes, eg "is2500,cs2500"
    co_requisites = models.CharField(max_length=255)
    overview = models.TextField(null=True)  # prose paragraph
    learning_outcomes = models.CharField(
        max_length=255)  # list of codes, eg "K2c,K2b"
    # prose description with bullet points (use markdown?)
    teaching_learning = models.TextField(null=True)
    assessment_desc = models.TextField(null=True)
    feedback = models.TextField(null=True)  # prose desc
    # prose desc with bullet pts (markdown?)
    readings = models.TextField(null=True)
    topics = models.TextField(null=True)  # same format as readings

    def __str__(self):
        return self.title


class Assessment(models.Model):
    ae = models.IntegerField()  # number
    # assessment type eg written assessment
    activity = models.CharField(max_length=255)
    weight = models.IntegerField()  # percentage
    # time to complete, eg 60 mins or 24-32 hours
    duration = models.CharField(max_length=255)
    length = models.CharField(max_length=255)  # word count
    course_code = models.CharField(max_length=255)
    learning_outcomes = models.CharField(
        max_length=255)  # list of codes, eg "K2c,K2b"

    def __str__(self) -> str:
        return str(self.ae) + " " + self.course_code


class LearningOutcomes(models.Model):
    class Types(models.TextChoices):
        KN_UNDERSTANDING = "K", _("Knowledge and Understanding")
        SUB_SPECIFIC = "S", _("Subject Specific Skills")
        TRANSFERABLE = "T", _("Transferable and Employability Skills")

    code = models.CharField(max_length=3)  # eg K2c
    type = models.CharField(max_length=1, choices=Types.choices)  # enum above
    text_desc = models.TextField()
    course_code = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.code + " for course " + self.course_code


class Approval(models.Model):
    version_num = models.IntegerField()  # eg 1.0, 2.0
    date_approved = models.DateField()  # eg November 2022
    date_published = models.DateField()  # same date format as ^
    owner = models.CharField(max_length=100)  # staff name
    next_review_date = models.DateField()  # empty or date format
    mod_cat_num = models.CharField(max_length=255)  # modification/category num
    approved_by = models.CharField(max_length=255)
    location = models.CharField(max_length=255)  # url
    course_code = models.CharField(max_length=255)

    def __str__(self) -> str:
        return "v" + str(self.version_num) + " of course " + self.course


class Templates(models.Model):
    class Meta:
        unique_together = (('version', 'assessment_key', 'course_code'),)

    version = models.IntegerField()
    assessment_key = models.ForeignKey(Assessment, on_delete=models.CASCADE)
    course_code = models.ForeignKey(
        Course, to_field='course_code', on_delete=models.CASCADE)
    template = models.JSONField()

# Table for mock approvers'emails
class Approver(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

# Relation Table for approvers and templates
class ApproversTemplates(models.Model):
    approverID = models.ForeignKey(Approver, on_delete=models.CASCADE)
    templateID = models.ForeignKey(Templates, on_delete=models.CASCADE)