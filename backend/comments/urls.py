from django.urls import path
from . import views

urlpatterns = [
    path('<str:videoId>/', views.get_all_comments),
]