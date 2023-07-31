"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from docprocessing import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('courses/', views.courses),
    path('courses/<int:page>/<int:pageSize>', views.courses_paginated),
    path('courses/templates/<str:course_code>/', views.course_templates),
    path('assessments/<str:course_code>/', views.assessments),
    path('learning-outcomes/<str:course_code>/', views.learning_outcomes),
    path('template/<str:courseId>/<str:assessmentId>/<str:version>', views.template),
    path('template-by-id/<str:templateId>/', views.template_by_id),
    path('new_version/<str:course_code>/<str:assessment_id>/', views.new_version),
    path('send-approver-email/', views.send_emails),
    path('update-template-status/<str:hashedApproverEmail>/<int:templateId>/', views.update_template_status), 
    path('get-approvers/', views.get_approvers),
    path('tobe_approved_list/<str:approverID>/', views.tobe_approved_list),
]
