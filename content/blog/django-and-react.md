---
path: django-and-react
tag: django
date: 2020-03-17T00:36:36.585Z
title: Django and React using GraphQL API
description: >-
  Django and react js can be used to create full-stack web application. Let's
  create a project and configure our django to run with react js as the frontend
  layer. We'll be using GraphQL as our API query language.
---
This post is on how to structure your django and react js project. If you have problems integrating [django](https://clouditate.com/django-postgresql-and-docker-setup-linux/) and react then you've come to the right place. This simple yet comprehensive tutorial with teach you to build web apps with django and react.

## Django Graphene and React

Django is a [python web framework](https://www.theophilusn.com/blog/history-of-python-programming-language/) that follows the MVT architecture. Since it's inception, django popularity has being rising ever since. Many big companies are using django to power their backend including NASA (Space Organisation). Developers love django framework for many reasons including the fact that it's a python framework. We'll be using django and react js in this tutorial to create a simple user authentication system and data retrieval app. What you will learn:

* How to build a django GraphQL API
* How to configure your django project to work with react js.

## GraphQL and React Gatsbyjs

[React js ](https://clouditate.com/react-tutorial-getting-started/)a frontend library build by Facebook to simplify frontend development. React is used by big companies such as twitter, Instagram, github, bitbucket and amazon. Gatsby is a react based framework. It is packed with GraphQL features that are not in react itself and we shall be using it to speed our development. What you will learn:

* How to define your GraphQL API in react Gatsby js.
* How to make react Gatsby communicate with Django API.

Let's get started and develop our website.



## Create a virtual environment and install django

A virtual environment helps us to separate our system files from the mess we might cause when developing our django project

```
mkdir blogging && cd blogging
pipenv install django==3.0.3
```

**Note:** Sometimes you will an UnsupportedPythonVersion error - Django requires Python>=2.7.17. To solve this problem. Open your Pipfile and change the python version from 2.7 to 3.7 or 3.6 depending which one is globally installed on your computer. and after changing the python version, run the following command:

```
pipenv --rm
pipenv install
pipenv shell 
```

Now we have installed our django. Let's create the actual project.

**Note:** Don't forget to activate your virtual environment by running the *pipenv shell* command.

## Create Django Project using Pipenv

After installing Django we can go ahead and create the django-react project. 

```
django-admin startproject django_react
cd django_react
```

Before we continue let's install all the necessary python requirements we'll need to integrate django and react.

```
pipenv install graphene-django
pipenv install django-graphql-jwt
pipenv install django-cors-headers
pipenv install autopep8 --dev
```



### Create Django application

Everything is set to go now, let's create our first django app and define our blog models

```
python manage.py startapp blog
```

#### Django blog models

Create your model classes in the blog app.models.py file.

```python
from django.db import models
from django.utils.translation import gettext_lazy as _ 
from django.utils.text import slugify
from django.urls import reverse
# Create your models here.
class Post(models.Model):
     title = models.CharField(_("Post title"), max_length=100)
     summary = models.CharField(_("Summary"), max_length=255)
     keywords = models.CharField(_("SEO Keywords"), max_length=255)
     body = models.TextField(_("Post body"))
     published = models.DateTimeField(auto_now=True)
     slug = models.SlugField(_("Slug"), max_length=255, default='', blank=True, unique=True)    

    class Meta:
        verbose_name = _("Post")
        verbose_name_plural = _("Posts")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

```