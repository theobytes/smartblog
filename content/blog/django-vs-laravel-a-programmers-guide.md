---
path: django-vs-laravel
date: 2020-01-14T13:34:16.713Z
title: 'Django vs Laravel: A programmers Guide'
description: >-
  Laravel and Django are the two most popular web frameworks and many website
  and systems use these frameworks to power their backend. One of the reasons
  why the frameworks gained much popularity is their inbuilt support for API
  development.
---
Web development is funny, enjoyable and easy if you know what you're doing. Many young programmers, however, find it difficult to start developing web systems using serious frameworks. There are many web frameworks and they'll seem to work in the same way and that causes a lot of dilemmas as to which framework to pick and learn and use. This post will highlight the similarities, differences, advantages and disadvantages of using either Laravel or Django Web Framework.

Laravel and Django are the two most popular web frameworks and many website and systems use these frameworks to power their backend. One of the reasons why the frameworks gained much popularity is their inbuilt support for API development which will then communicate with Progressive Web Apps and Single Page Applications (React or Angular) frontends. Before we start let's define a framework.

## Web Framework

A web framework is abstract software. The framework has abstract implementations of functions such as routers, views, model development and migrations. These abstractions help a developer get started very quickly without deep programming knowledge.

### Django Web Framework

Django is a high-level web framework written purely in python programming language. It follows the MVT (Model View Template) framework. It encourages rapid development and clean, pragmatic design. Many of the features a programmer can hope for are inbuilt and easy to extend in your project. It is also free and open-source, meaning you can also contribute to the development of Django.

#### Features

Self-proclaimed features of Django web framework according to their website. These features however depends on your overall developing prowess. The overall performance  depends, in most cases, in how you know and use your python.

##### Template engine (View Layer)

Django comes with inbuilt template engine. You can focus on what matters most like database design (models) and form design while django handle template rendering of your dynamic content from the database and form. Your templates are just html files with **jinja** tags. 

**Jinja** is a python web template engine and it helps django to communicate with your python view contexts. Just to give you a test of templates engine:

```python
@login_required
def index(request):
    user = request.user
    schools = School.objects.filter(admin=user)
    events = Event.objects.filter(author=user)
    books = Book.objects.filter(poster=user)
    lists = List.objects.filter(profile=user)
    context = {
        'schools': schools,
        'events': events,
        'books': books,
        'lists': lists
    }
    template = loader.get_template('app/index.html')
    return HttpResponse(template.render(context, request))
```

This is an index page view, it takes care of all the controlling and contexts to be rendered dynamically to the web page. So the index page displays schools, events, books, lists and are all pulled from the database through querysets such as:

```python
 #School is a model name and we're filtering the schools to return only those where scholl admin - loggedin user
 schools = School.objects.filter(admin=user)
```



I've given a feel of how django web frameworks view layer feels like. Let's move on.

##### Fast

Django helps you transform your concepts and designs from paper to code to production in a very short space of time. 

##### **Secure**

Every web framework is built with security in mind. All the known vulnerabilities of websites are taken care of by the framework and so you don't need to worry about security as much as you would do if you develop the site yourself.

##### Scalability

A Django project comprises of applications (apps) and each of those apps is pluggable to the project. So you can develop your applications in part and then plug them at the end.

##### Fully Loaded

Django comes with dozens of extra features and functions are typical project requires e.g. user authentication, site maps (for SEO), RSS feeds, content management.

##### Versatile

You can build any type of web projects with Django. Since it's built entirely with python, any python package can be used along with Django.

#### Examples of sites using Django

1. [Instagram](https://www.instagram.com/)
2. [Disqus](https://disqus.com/https://disqus.com/)
3. [Pinterest](https://www.pinterest.com/)
4. [National Geographic](http://www.nationalgeographic.com/)
5. [Mozilla](https://www.mozilla.org/)
6. [Open Stack](https://www.openstack.org/)
7. [Open Knowledge Foundation](https://okfn.org/)

### Laravel Web Framework

Laravel is a web framework written in PHP. It follows the MVC (Model View Controller) framework. Its main goal is to enable and promote expressive, elegant syntax in web development. Laravel is so powerful and popular, partly because PHP is a beloved programming language and many people use it. Over 85% of internet web pages use PHP and thus it has extensive documentation and this makes it easy for a new comer to adapt fast.

#### Features

These are some of the features Laravel offers from the box. 

##### Template engine

Laravel comes with a powerful inbuilt engine for templating. You can also plug dynamic content into the templates to build unseemly powerful web pages. The templates are in the format template-name.blade.html, which are nothing new if you've a little experience with html language. 

Even with this templating engine, with Laravel not dictating which JavaScript or CSS pre-processor to use, you can also use modern web application stacks, for example with react or angular JavaScript. Laravel particularly comes with a very ease command for choosing react as your frontend. It's very easy with the command:

```php
> php artisan ui react
// Generate login / registration scaffolding...
> php artisan ui react --auth
```

Laravel comes with already build authentication templates for react scaffold. That's how easy it is with Laravel. Note pointing out, **Django does not offer** you with inbuilt commands to transitions from the inbuilt template engine to modern frontend stacks such as react and vue.

#### Examples of sites using Laravel

1. 9Gang
2. UNION
3. Toyota Hall of fame
