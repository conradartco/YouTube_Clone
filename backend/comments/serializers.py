from rest_framework import serializers
from .models import Comment

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['user', 'video_id', 'text', 'likes', 'dislikes']