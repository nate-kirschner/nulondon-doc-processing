from django.db import models

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


    def __str__(self):
        return self.title
    