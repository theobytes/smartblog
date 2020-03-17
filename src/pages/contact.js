import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
 
  render() {
    const siteTitle = "Contact Me: Theophilus Ngaribvume, Django and Python"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact django web developer in Zimbabwe"
          description = "Find a django web developer in Zimbabwe. Contact Theophilus for more information on django software development"
          keywords={[`django`, 'react', 'frontend', 'backend', `web development`, `python`, `django graphene`, `api development with django`, `python`, `react`, `gatsby` ]}
        />
        <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" autoComplete='off'>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />      
            <input name="name" type="text" class="feedback-input" placeholder="Name" />   
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="message" id="message" class="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
      </Layout>
    )
  }
}


export default ContactPage
