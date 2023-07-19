from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=255)
    course_code = models.CharField(max_length=255)
    discipline = models.CharField(max_length=255)
    uk_credit = models.IntegerField()
    us_credit = models.IntegerField()
    fheq_level = models.IntegerField()
    date_approved = models.DateField()
    core_attributes = models.CharField(max_length=255)
    pre_requisites = models.CharField(max_length=255)
    co_requisites = models.CharField(max_length=255)
    overview = models.TextField(null=True)
    learning_outcomes = models.TextField(null=True)
    teaching_learning = models.TextField(null=True)
    assessment_desc = models.TextField(null=True)
    feedback = models.TextField(null=True)
    readings = models.TextField(null=True)
    topics = models.TextField(null=True)

    def __str__(self) -> str:
        return self.title

class Assignment(models.Model):
    ae = models.IntegerField()
    activity = models.CharField(max_length=255)
    weight = models.IntegerField()
    duration = models.CharField(max_length=255)
    length = models.CharField(max_length=255)
    course_code = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.ae) + self.course_code

class LearningOutcomes(models.Model):
    class Types(models.TextChoices):
        KN_UNDERSTANDING = "K", _("Knowledge and Understanding")
        SUB_SPECIFIC = "S", _("Subject Specific Skills")
        TRANSFERABLE = "J", _("Transferable and Employability Skills")

    code = models.CharField(max_length=3)
    type = models.CharField(max_length=1, choices=Types.choices)
    text_desc = models.TextField()
    course_code = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.code + " for course " + self.course_code

class Prereq(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name = "course_with_prereq")
    prereq = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="prereq")

    def __str__(self) -> str:
        return self.prereq + " is prerequisite for course " + self.course

class Coreq(models.Model): 
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name = "course_with_coreq")
    coreq = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="coreq")

    def __str__(self) -> str:
        return self.coreq + " is corequisite for course " + self.course