from random import randint
import requests

from .factories import HackathonFactory, DeveloperFactory


def create_hackathon_job():
    r = requests.get("https://loremflickr.com/json/640/640/abstract")
    response = r.json()

    cant_participants = randint(11, 25)
    participants = DeveloperFactory.create_batch(cant_participants)
    HackathonFactory.create(
        logo=response["file"], participants=participants
    )
