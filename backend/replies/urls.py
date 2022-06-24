from django.urls import path
from . import views

urlpatterns = [
    path('<int:fk>/', views.get_all_replies),
    path('comment/<int:fk>/', views.user_reply)
]