from datetime import datetime, timezone
from django.db import models
from django.core.validators import MaxValueValidator


def get_sentinel_dev():
    return Developer.objects.get_or_create(
        username="deleted_account", name="Deleted user"
    )[0]


class Developer(models.Model):
    name = models.CharField(max_length=60)
    country = models.TextField(blank=True)
    username = models.CharField(max_length=36, primary_key=True)
    picture = models.TextField(blank=True)

    def __str__(self):
        return f"@{self.username}"
        # return f"{self.name} from {self.country}"


def get_sentinel_hackathon():
    return Hackathon.objects.get_or_create(name="Cancelled event")[0]


class Hackathon(models.Model):
    name = models.CharField(
        max_length=60
    )  # https://fakerjs.dev/api/random.html#words + Hackathon
    motto = models.TextField()  # https://fakerjs.dev/api/company.html#catchPhrase x3
    date_start = (
        models.DateField()
    )  # https://fakerjs.dev/api/date.html#recent | https://fakerjs.dev/api/date.html#soon
    date_end = models.DateField()  # https://fakerjs.dev/api/date.html#soon | ++
    location = (
        models.TextField()
    )  # https://fakerjs.dev/api/address.html#cityName, https://fakerjs.dev/api/address.html#country
    website = models.URLField(blank=True)  # https://fakerjs.dev/api/internet.html#url
    logo = models.TextField()  # https://loremflickr.com/640/640/abstract

    participants = models.ManyToManyField(
        Developer,
        through="Participant",
        related_name="hackathons",
        related_query_name="hackathon",
    )

    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def is_new(self):
        difference = datetime.now(timezone.utc) - self.created_at
        return difference.seconds/60 < 10

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["-date_start", "-date_end"]
        unique_together = ["name", "location"]


# participants length --> randint(6, 20)


class Participant(models.Model):
    developer = models.ForeignKey(Developer, on_delete=models.SET(get_sentinel_dev))
    hackathon = models.ForeignKey(
        Hackathon, on_delete=models.SET(get_sentinel_hackathon)
    )
    score = models.PositiveSmallIntegerField(
        default=0, validators=[MaxValueValidator(1000)]
    )

    class Meta:
        ordering = ["-score"]
