# Generated by Django 4.1 on 2022-08-12 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0006_alter_participant_score"),
    ]

    operations = [
        migrations.AlterField(
            model_name="developer",
            name="name",
            field=models.CharField(max_length=60, null=True),
        ),
    ]
