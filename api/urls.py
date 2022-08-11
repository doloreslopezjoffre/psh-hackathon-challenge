from django.urls import include, path
from .views import hackathons

urlpatterns = [
    path("auth/", include("auth.urls")),
    path("hackathons/", hackathons, name="hackathons"),
]
