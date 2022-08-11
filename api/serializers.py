from rest_framework import serializers

from .models import Hackathon, Participant, Developer


class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = "__all__"


""" class ParticipantSerializer(serializers.Serializer):
    # developer = DeveloperSerializer()
    developer = serializers.SerializerMethodField()

    def get_developer(self, dev):
        dev_query = Developer.objects.filter(developer=dev.pk)
        serializer = DeveloperSerializer(dev_query, many=True)

        return serializer.data

    class Meta:
        model = Participant
        fields = "__all__"


class HackathonSerializer(serializers.ModelSerializer):
    # participants = ParticipantSerializer(many=True)
    participants = serializers.SerializerMethodField()

    def get_developer(self, dev):
        dev_query = Participant.objects.filter(developer=dev.pk)
        serializer = Participant(dev_query, many=True)

        return serializer.data

    class Meta:
        model = Hackathon
        fields = "__all__" """


class ParticipantSerializer(serializers.ModelSerializer):
    developer = DeveloperSerializer()

    class Meta:
        model = Participant
        exclude = ["hackathon"]


class HackathonSerializer(serializers.ModelSerializer):
    participants = ParticipantSerializer(source="participant_set", many=True)

    dateStart = serializers.DateField(source="date_start")
    dateEnd = serializers.DateField(source="date_end")

    isNew = serializers.BooleanField(source="is_new", read_only=True)

    class Meta:
        model = Hackathon
        exclude = ["date_start", "date_end"]
