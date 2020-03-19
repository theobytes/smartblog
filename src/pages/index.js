import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
 
  render() {
    const siteTitle = "Django Backend and React Frontend Tutorials"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title=""Django and React tutorials | GatsbyJs with Django Graphene GraphQL API"
          keywords={[`django`, `graphene`, `react`, `frontend`, `backend`, `api`, `graphql`, `web development`, `python`, `django graphene`, `api development with django`, `python`, `react`, `gatsby` ]}
        />
        <img style={{ margin: 0 }} src="./blog.svg" alt={siteTitle} />
        <h1>
          Hi. I'm Theophilus{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Django and React Tutorials.</p>
        <p>
          <Link to="blog/django-and-react/">Django and react</Link> are two popular technologies that can be used hand in hand to develop web applications and systems.Django web frameworks has been around since 2005 and react js was also developed in 2013. They 're a bit old technologies but still powerful and fun to play around. Django competes with other web frameworks such as <Link to="/blog/django-vs-laravel-a-programmers-guide/">Laravel web framework</Link>. React on the other hand competes with angular js.
        </p>
        <h2>
          Django web framework{" "}
        </h2>
        <p><span role="img" aria-label="wave emoji">👋</span><a href="https://reactjs.org/" target="__blank"rel="noopener noreferrer">Django</a> is a <a href="https://hackernoon.com/what-is-a-web-framework-173cac228b4" target="__blank" rel="noopener noreferrer">web framework</a> developed entirely in <Link to="/blog/history-of-python-programming-language/">python programming language</Link>. It follows the Model View Template (MVT) architecture. Django comes packed with features and ready to use components, plug and play staff. Examples are<span role="img" aria-label="wave emoji">👋</span>a template engine that uses jinja syntax and allows you to extend pages and inject python inside HTML, <span role="img" aria-label="wave emoji">👋</span>a URL system that allows you to design elegant web addresses without any difficulties, <span role="img" aria-label="wave emoji">👋</span>a database ORM (Object Relational Mapper) that allows you to define your database schema in python code and geneate database tables using a magic command, python manage.py migrate, <span role="img" aria-label="wave emoji">👋</span>a view layer that comes packed with extensible view classes like the CreateView, UpdateView, ListView, TemplateView, and DetailView, <span role="img" aria-label="wave emoji">👋</span> a permission system that allows you to define access boundaries in your website, <span role="img" aria-label="wave emoji">👋</span>a ready to use dashboard that you can use for content management.</p>
        <h3>
          Django GraphQL API (Django Graphene)
        </h3>
        GraphQL is a goto API query language for APIs. It is also possible to use graphql with django web framework using <a href="https://docs.graphene-python.org/projects/django/en/latest/" target="__blank" rel="noopener noreferrer">django-graphene</a>. GraphQL has more advantages over the legacy API endpoints like REST and SOAP. It also provides complete description of your data all at once. We will using graphql in this blog whenever we want to create a blog.
         <h2>
          React library{" "}
        </h2>
        <p>
          <span role="img" aria-label="wave emoji">👋</span>React is a frontend library. It is maintained by <a target="__blank" href="https://facebook.com" rel="noopener noreferrer">Facebook</a>. React can be used to develop single page applications and cross platform mobile apps using <a target="_blank" href="https://facebook.github.io/react-native/" rel="noopener noreferrer">react native</a>. The power of react is in its ability to divide a web application into small and reusable components. A page is divided into many different parts that you can reuse on other pages.
          Many people are using react to power thier frontend. Facebook, twitter, instagram, codesandbox and many other web systems are using react because of it's power to simplify frontend development. React uses javascript XML (JSX) which is an XML syntax for extesion to javascript. With JSX, one can declare variable, attributes in HTML-like syntax. 
        </p>
         <h3>
          Gatsby{" "}
        </h3>
        <p>
         Gatsby is a JavaScript framework for building blazing fast progressive websites and applications. It is based on React js which is a frontend library for building website and apps frontend. 
         The websites are fast and efficient because Gatsby does not wait to build page on request, it pre-build the pages to improve server response time.
         </p>
         <h4>Why you should use Gatsby</h4>
         <ul>
          <li>Blazing fast website</li>
          <li>Fetch your data from anywhere using the Gatsby GraphQL API</li>
          <li>Build on top of latest and best web technolgies like React and GraphQL</li>
          <li>Free starters or themes to choose from</li>
          <li>Plugins that you can use to extend the functionality of your website</li>
          <li>Best SEO results</li>
         </ul>
        <p>
          Let's enjoy the blog.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
