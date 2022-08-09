from django.urls import path

from rest_framework_simplejwt.views import (
    token_obtain_pair,
    token_refresh,
)

from .views import register, current_user, logout

urlpatterns = [
    path("signup/", register, name="signup"),
    path("login/", token_obtain_pair, name="login"),
    path("login/refresh/", token_refresh, name="token_refresh"),
    path("me/", current_user, name="me"),
    path("logout/", logout, name="logout"),
]
