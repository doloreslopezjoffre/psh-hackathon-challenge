# Generated by Django 4.1 on 2022-08-12 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0008_alter_developer_country"),
    ]

    operations = [
        migrations.AlterField(
            model_name="developer",
            name="picture",
            field=models.TextField(blank=True, null=True),
        ),
    ]