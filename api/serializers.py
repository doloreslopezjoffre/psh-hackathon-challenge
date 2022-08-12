from rest_framework import serializers

from .models import Hackathon, Participant, Developer


class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = "__all__"


class RawParticipantSerializer(serializers.ModelSerializer):
    developer = DeveloperSerializer()

    class Meta:
        model = Participant
        exclude = ["hackathon"]


class HackathonSerializer(serializers.ModelSerializer):
    participants = RawParticipantSerializer(source="participant_set", many=True)

    dateStart = serializers.DateField(source="date_start")
    dateEnd = serializers.DateField(source="date_end")

    isNew = serializers.BooleanField(source="is_new", read_only=True)

    class Meta:
        model = Hackathon
        exclude = ["date_start", "date_end"]


class ParticipantSerializer(serializers.ModelSerializer):
    developer = DeveloperSerializer()
    hackathon = HackathonSerializer()

    """ 
    def __init__(self, *args, **kwargs):
        skip_hackathon = self.context.get("skip_hackathon")
        if skip_hackathon:
            kwargs.pop("hackathon ", False)
        super().__init__(*args, **kwargs)
    """

    class Meta:
        model = Participant
        fields = "__all__"
