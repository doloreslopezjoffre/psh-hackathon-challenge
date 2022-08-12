import factory
from faker import Factory

from string import capwords
import datetime
from random import randint, choice
import requests

from .models import Hackathon, Developer

fake = Factory.create(locale="en_US")


class DeveloperFactory(factory.django.DjangoModelFactory):
    @factory.lazy_attribute
    def name(self):
        r = requests.get("https://randomuser.me/api")
        response = r.json()
        user = response["results"][0]

        return user["name"]["first"]

    @factory.lazy_attribute
    def country(self):
        r = requests.get("https://randomuser.me/api")
        response = r.json()
        user = response["results"][0]

        return user["location"]["country"]

    @factory.lazy_attribute
    def username(self):
        r = requests.get("https://randomuser.me/api")
        response = r.json()
        user = response["results"][0]

        return user["login"]["username"]

    @factory.lazy_attribute
    def picture(self):
        r = requests.get("https://randomuser.me/api")
        response = r.json()
        user = response["results"][0]

        return user["picture"]["large"]

    class Meta:
        django_get_or_create = ["username"]
        model = Developer


class HackathonFactory(factory.django.DjangoModelFactory):
    name = f"{capwords(fake.sentence(nb_words=2))[:-1]} {choice(['Hackathon', 'Summit', 'Event', 'H4CK'])}"
    motto = fake.catch_phrase()
    location = f"{fake.city()}, {fake.country()}"
    website = (fake.url())[:-1]
    date_start = factory.LazyFunction(
        lambda: choice(
            [
                fake.future_date(end_date="+90d"),
                fake.past_date(start_date="-90d"),
                datetime.date.today(),
            ]
        )
    )
    date_end = factory.LazyAttribute(
        lambda h: fake.date_time_between(start_date=h.date_start, end_date="+181d")
    )

    @factory.post_generation
    def participants(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing
            return

        if extracted:
            # A list of participants were passed in, use them
            for participant in extracted:
                score = randint(1, 100)
                self.participants.add(participant, through_defaults={"score": score})

    class Meta:
        django_get_or_create = ["name"]
        model = Hackathon
