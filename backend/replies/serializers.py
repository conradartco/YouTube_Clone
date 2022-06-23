from rest_framework import serializers
from .models import Reply

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['user', 'comment', 'text']