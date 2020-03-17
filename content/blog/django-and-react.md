---
path: django-and-react
tag: django
date: 2020-03-17T00:36:36.585Z
title: Django and React Gatsby using GraphQL API to create a blog
description: >-
  Django and react gatsby js can be used to create full-stack web application.
  Let's create a blog website project and our Django to run with React js as the
  frontend layer. We'll be using GraphQL as our API query language.
---
Learn how to structure your django and react js project. If you have problems integrating [django](https://clouditate.com/django-postgresql-and-docker-setup-linux/) and react gatsby js then you've come to the right place. This simple yet comprehensive tutorial with teach you to build web apps with django and react js from scratch. 

## Django Graphene and React

Django is a [python web framework](https://www.theophilusn.com/blog/history-of-python-programming-language/) that follows the MVT architecture. Since it's inception, django popularity has being rising ever since. Many big companies are using django to power their backend including NASA (Space Organisation). Developers love django framework for many reasons including the fact that it's a python framework. We'll be using django and react js in this tutorial to create a simple blog web application. What you will learn:

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
#blog/models.py
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

Now that our main blog application is created and we've also defined our models. Let's register the blog application and define our Graphene settings in the django_react.settings.py file 

```python
#django_react/settings.py

INSTALLED_APPS = [
     '.........',
     #Third part applications
     'graphene_django',
      
     #Custom applications
     'blog.apps.BlogConfig',
]

#Graphene
GRAPHENE = {
     #To be created schema.py file inside the django_react project folder
    'SCHEMA': 'django_react.schema.schema',
    # JWT Authentication
    'MIDDLEWARE': [
        'graphql_jwt.middleware.JSONWebTokenMiddleware',
    ],
}
```

### GraphQL Schema files

Let's create the necessary GraphQL schema.py files, We'll define our GraphQL schema in the app level schama.py and register it to the project level schema.py file.

```
touch django_react/schema.py
touch blog/schema.py
```

Before we start defining the graphql schema, let's migrate our database

```
python manage.py makemigrations
python manage.py migrate
```

With our database intact, django graphene is ready to take define our queries and mutations. There two things needed to make queries in:

* schema with defined object types.
* View that takes input and returns output.

Objects are presented as graph structure than a hierarchical structure. Graphene needs to understand all type of object which is expected in the graph.  For more information visit the [graphene official website](https://docs.graphene-python.org/projects/django/en/latest/tutorial-plain/).

```python
#blog/schema.py
import graphene
from graphene_django.types import DjangoObjectType
from blog.models import Post


class PostType(DjangoObjectType):
    class Meta:
        model = Post


class Query(object):
    all_posts = graphene.List(PostType)

    def resolve_all_posts(self, info, **kwargs):
        return Post.objects.all()
```

The query calss is a mixin inheriting from object. Lets now create a project level query class that will combine all the application level query classes.

```python
#djano_react/schema.py
import graphene
import blog.schema

class Query(blog.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
```

Everything in our Graphene schema is set to function well.  

### Lets test our Graphene API on a URL endpoint

Since we want to test our queries on the GraphQL playground, we have to configure the **urls.** GraphQL allows you to have only one single URL from which to access your API and all the requests to that URL is handled in Graphene GraphQLView.

```python
#django_react/urls.py
from django.contrib import admin
from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
```

If you run the server and open the browser you should see something the Graphene Playground open.