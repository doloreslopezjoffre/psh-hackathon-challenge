# Generated by Django 4.1 on 2022-08-11 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_developer_picture"),
    ]

    operations = [
        migrations.AlterField(
            model_name="hackathon",
            name="participants",
            field=models.ManyToManyField(
                related_name="hackathons",
                related_query_name="hackathon",
                through="api.Participant",
                to="api.developer",
            ),
        ),
    ]
