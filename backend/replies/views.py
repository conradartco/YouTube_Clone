from rest_framework import status
from .models import Reply
from .serializers import ReplySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_replies(request, fk):
    replies = Reply.objects.filter(comment_id=fk)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_reply(request, fk):
    temp_data = request.data
    temp_data["comment"]=fk
    serializer = ReplySerializer(data=temp_data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)