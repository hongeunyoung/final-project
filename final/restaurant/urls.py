from django.urls import path
from . import views

urlpatterns = [
    path('restaurant/', views.restaurant),
    path('recommend/', views.recommend),
]
