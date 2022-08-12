from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Hackathon
from .serializers import HackathonSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def list_hackathons(request):
    queryset = Hackathon.objects.all()
    serializer = HackathonSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_hackathon(request, id):
    if not id:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    hackathon = get_object_or_404(Hackathon, id=id)
    serializer = HackathonSerializer(hackathon)
    return Response(serializer.data, status=status.HTTP_200_OK)
