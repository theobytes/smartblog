import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class SuccessPage extends React.Component {
 
  render() {
    const siteTitle = "Thank you for contacting me, i'll reply shortly"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact"
           description = "Django web framework free tutorials"
          keywords={[`django`, 'react', 'frontend', 'backend', `web development`, `python`, `django graphene`, `api development with django`, `python`, `react`, `gatsby` ]}
        />
       <div class="thankyoucontent">
            <div class="wrapper-1">
                <div class="wrapper-2">
                    <img src="https://i.ibb.co/Lkn7rkG/thank-you-envelope.png" alt="thank-you-envelope" border="0"/>
                  <Link to="/blog/">
                    <Button marginTop="35px">Go to Blog</Button>
                  </Link>
                </div>
            </div>
        </div>
      </Layout>
    )
  }
}


export default SuccessPage
