from math import perm
from .models import Comment
from .serializers import CommentSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, videoId):
    comments = Comment.objects.filter(video_id=videoId)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def user_comment(request):
