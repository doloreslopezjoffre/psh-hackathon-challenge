from django.urls import include, path, re_path
from .views import list_hackathons, get_hackathon, list_participants

urlpatterns = [
    path("auth/", include("auth.urls")),
    path("hackathons/all/", list_hackathons, name="all_hackathons"),
    re_path(r"^hackathons/(?P<id>\d+)/", get_hackathon, name="hackathon_by_id"),
    path("developers/all/", list_participants, name="all_developers"),
]
