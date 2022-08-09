from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ["password"]


class UserCreateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True, required=True)
    password = serializers.CharField(
        write_only=True, required=True, style={"input_type": "password"}
    )
    password_repeat = serializers.CharField(
        style={"input_type": "password"}, write_only=True, label="Confirm password"
    )

    def create(self, validated_data):
        username = validated_data["username"]
        if username and User.objects.filter(username=username).exists():
            raise serializers.ValidationError({"username": "Username already in use"})

        password = validated_data["password"]
        password_repeat = validated_data["password_repeat"]
        if password != password_repeat:
            raise serializers.ValidationError({"password": "Passwords do not match"})

        user = User(username=username)
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = [
            "username",
            "password",
            "password_repeat",
        ]
        extra_kwargs = {"password": {"write_only": True}}
