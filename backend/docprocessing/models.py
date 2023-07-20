from django.db import models
from django.utils.translation import gettext_lazy as _

class Course(models.Model):
    """Python Class representaiton of the Courses Table"""
    title = models.CharField(max_length=255) # eg Global Objects in Context
    course_code = models.CharField(max_length=255, primary_key=True) # eg LADES5261
    discipline = models.CharField(max_length=255) # eg Art and Design
    uk_credit = models.IntegerField() 
    us_credit = models.IntegerField() 
    fheq_level = models.IntegerField() 
    date_approved = models.DateField() 
    core_attributes = models.CharField(max_length=255) 
    pre_requisites = models.CharField(max_length=255)
    co_requisites = models.CharField(max_length=255)
    overview = models.TextField(null=True) # prose paragraph
    learning_outcomes = models.TextField(null=True) # description around outcomes
    teaching_learning = models.TextField(null=True) # prose description with bullet points (use markdown?)
    assessment_desc = models.TextField(null=True) 
    feedback = models.TextField(null=True) # prose desc
    readings = models.TextField(null=True) # prose desc with bullet pts (markdown?)
    topics = models.TextField(null=True) # same format as readings

    def __str__(self):
        return self.title

class Assignment(models.Model):
    ae = models.IntegerField() # number
    activity = models.CharField(max_length=255) # assessment type eg written assignment
    weight = models.IntegerField() # percentage
    duration = models.CharField(max_length=255) # time to complete, eg 60 mins or 24-32 hours
    length = models.CharField(max_length=255) # word count
    course_code = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.ae) + " " + self.course_code

class LearningOutcomes(models.Model):
    class Types(models.TextChoices):
        KN_UNDERSTANDING = "K", _("Knowledge and Understanding")
        SUB_SPECIFIC = "S", _("Subject Specific Skills")
        TRANSFERABLE = "J", _("Transferable and Employability Skills")

    code = models.CharField(max_length=3) # eg K2c
    type = models.CharField(max_length=1, choices=Types.choices) # enum above
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
    
class Approval(models.Model):
    version_num = models.IntegerField() # eg 1.0, 2.0
    date_approved = models.DateField() # eg November 2022
    date_published = models.DateField() # same date format as ^
    owner = models.CharField(max_length=100) # staff name
    next_review_date = models.DateField() # empty or date format
    mod_cat_num = models.CharField(max_length=255) # modification/category num
    approved_by = models.CharField(max_length=255)
    location = models.CharField(max_length=255) # url
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return "v" + str(self.version_num) + " of course " + self.course