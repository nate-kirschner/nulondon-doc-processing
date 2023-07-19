# urls.py (hookup viewset to URL)
from django.conf.urls import include, re_path
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet

router = DefaultRouter()
router.register(r'courses-db', CourseViewSet, basename='course')