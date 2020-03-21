---
path: django-models-fields
tag: django
date: 2020-03-21T14:49:33.572Z
title: Django Models Fields
description: >-
  Django model fields example code and illustrations. Learn all the django model
  fields and use them effectively in your django project.
---
Django model fields example code and illustrations. Learn all the django model fields and use them effectively in your django project.

Django object relational mapper (ORM) helps developers define and manipulate database tables using python code. This tutorial will highlight the different fields that django introduces to make the OR more effective and reliable.

Writing better models is the best way to make the whole application development process easy and manageable. I wrote already on [ways to improve your django models ](https://www.theophilusn.com/blog/django-models-fields-how-to-design-better-django-models/)definition. And you can visit the post if you haven't visited it.

When you define a model, the important part is the fields you will define in your model class. If you need to define the fields well you need to know all the fields there to know in django.

You fields must not conflict with python or django predefined variables e.g save, delete, clean.

## Django model example

This is a typical django model class

```python
from django.db import models

school_category = (
    ('high-school', 'High School'),
    ('primary-school', 'Primary School'),
    ('college-institute', 'College / Institute'),
    ('university', 'University'),
)
class School(models.Model):
    boarding_s = (
        ('non-boarding', 'Non-Boarding'),
        ('boarding', 'Boarding'),
    )
    boards = (
        ('zimsec', 'ZiMSEC'),
        ('cambridge', 'CAMBRIDGE'),
        ('zimsec-cambridge', 'ZIMSEC & CAMBRIDGE'),
        ("zimsec-hexco", 'ZIMSEC & HEXCO'),
        ("cambridge-hexco", 'CAMBRIDGE & HEXCO'),
        ('hexco', 'HEXCO'),
        ("zimsec-cambridge-hexco", 'All'),
    )
    id = models.AutoField(primary_key=True)
    admin = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField('School Name', max_length=30, unique=True)
    logo = models.ImageField(_("School Logo"), upload_to="school/media/", null=True, blank=True)
    category = models.CharField(_("School Category"), choices=school_category, default="high-school", null=True, blank=True, max_length=50)
    exams = models.CharField(_("Exam Boards"), max_length=50)
    country = CountryField(_("Country"), default="ZW")
```