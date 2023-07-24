# Generated by Django 4.2.3 on 2023-07-19 10:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('docprocessing', '0002_course_learning_outcomes_course_overview'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ae', models.IntegerField()),
                ('activity', models.CharField(max_length=255)),
                ('weight', models.IntegerField()),
                ('duration', models.CharField(max_length=255)),
                ('length', models.CharField(max_length=255)),
                ('course_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='docprocessing.course')),
            ],
        ),
    ]