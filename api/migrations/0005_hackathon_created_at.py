# Generated by Django 4.1 on 2022-08-11 22:51

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_alter_hackathon_participants"),
    ]

    operations = [
        migrations.AddField(
            model_name="hackathon",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]
