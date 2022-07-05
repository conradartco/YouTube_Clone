from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_comment),
    path('<int:pk>/', views.user_edit_comment),
    path('video/<str:videoId>/', views.get_all_comments),
    path('<int:pk/like/', views.user_like_counter),
]