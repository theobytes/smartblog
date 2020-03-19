---
path: django-models-fields
tag: django
date: 2020-03-19T16:13:29.658Z
title: 'Django models fields:  How to design better django models'
description: >-
  Designing better django models can help improve your applications overall
  implementations. In this post, we'll get the introduction to django models,
  ORM concepts and how to design better models.
---
Designing better django models can help improve your applications overall implementations. In this post, we'll get the introduction to django models, ORM concepts and how to design better models.

My first advice is you should [PEP8](https://www.python.org/dev/peps/pep-0008/). 

## PEP8, django code guidelines

1. **Style Consistence** - Consistency within a function or module, and a project is most important. It is advised to use judgement when compromising style consistence. A coding style must be ignored if:

   * Applying a guideline makes the code less readable
   * Consistency breaks the codebase.
   * When compatibility questions doesn't allow consistency
2. **Indentation** -It's highly advised to use 4 spaces per indentation level.
3. **Spaces are preferred over tabs.**
4. **79 characters is the maximum per line of code.**
5. **Code in python should always use UTF-8 encoding.**
6. **Absolute paths are recommended when importing.**

## How to name your django models

Every model class is a typical python class so all the PEP8 guidelines on class definition applies. Always use **CapWord** andunderscores.  Examples:

* SiteMeta over Site_Meta or site_meta.
* UserCatetegory over User_Category or user_category

Likewise, the django model attributes must use the lowercase underscores instead of camelCase. Examples:

* first_name over firstName or FirstName
* registered_date over registeredDate

### Complete Example

```python
from django.db import models
from django.utils.translation import gettext_lazy as _ 
from django.utils.text import slugify
from django.urls import reverse
# Create your models here.
class BlogPost(models.Model):
     post_title = models.CharField(_("Post title"), max_length=100)
     post_summary = models.CharField(_("Summary"), max_length=255)
     keywords = models.CharField(_("SEO Keywords"), max_length=255)
     body = models.TextField(_("Post body"))
     published_date = models.DateTimeField(auto_now=True)
     slug = models.SlugField(_("Slug"), max_length=255, default='', blank=True, unique=True) 
```

The name of the model must always be singular, **Use BlogPost over BlogPosts.** 

The django model class Meta should appear soon after the fields and custom manager attributes are defined.

### Order of django model inner classes and functions

* Database fields
* custom manager fields
* class Meta
* def \_\_str\_\_()
* def save()
* def get_absolute_url()
* Other custom methods



If the you want to use choices in a model field, each choice must be defined as a list of tuple.

**Example**

```python
class Transfer(models.Model):
    user = models.ForeignKey(CustomUser, verbose_name=("user"), on_delete=models.CASCADE)
    domain_name = models.CharField(help_text="Domain name", max_length=50)
    note = models.TextField(help_text="Release note from your current registra")
    objects = models.Manager()
    class Meta:
        db_table = "dm_transfer"
        
    class __str__(self):
      return self.domain_name

    def save(self, *args, **kwargs):
        sender = self.user.email
        subject = "Domain Registration Transfer"
        full_message = "Domain name: {}, <br> note: {}".format(self.domain_name, self.note)
        try:
            send_mail(subject, full_message, sender, ['support@example.com'])
        except BadHeaderError:
                return HttpResponse('Email not valid')
        super(Transfer, self).save(*args, **kwargs)
        
    def get_absolute_url(self):
        return reverse("index")
      
    def send_quote(self):
        send_some_information()
```



### Django models reverse relationships

**related_name -** the related_name attribute in foreign key definition allows meaningful naming for the reverse relationship. As default, a programmer must use the plural of the model where the foreign key is defined.

```python
class Company:
  name = models.CharField(max_length=50)
  
class Car:
  model = models.CharField(max_length=50)
  manufacturer = models.FpreignKey(Company, on_delete=models.CASCADE, related_name="cars"
```

The company model now has a field *cars* and will return all cars instances of a company.

```python
tesla = Company.objects.get(name='Tesla')
tesla.cars.all()
```

The reverse relationship has the power to modify a field on Car instance, for example:

```python
cybertruck = Car.objects.get(model='Cyber Truck')
tesla = Company.objects.get(name='Tesla')
tesla.cars.add(cybertruck)
```