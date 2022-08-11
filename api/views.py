from rest_framework.response import Response
from rest_framework import status

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Hackathon
from .serializers import HackathonSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def hackathons(request):
    queryset = Hackathon.objects.all()
    print(queryset)

    serializer = HackathonSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
