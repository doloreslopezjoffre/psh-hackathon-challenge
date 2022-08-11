from django.urls import include, path
from .views import list_hackathons

urlpatterns = [
    path("auth/", include("auth.urls")),
    path("hackathons/all/", list_hackathons, name="hackathons"),
]
