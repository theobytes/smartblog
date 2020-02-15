import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
 
  render() {
    const siteTitle = "Sharing Tech Ideas & Knowledge"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Theophilus Ngaribvume"
          keywords={[`blog`, `computer science`, `coding`, `technology`, `software`, `python`, `c++`, `java` ]}
        />
        <img style={{ margin: 0 }} src="./blog.svg" alt={siteTitle} />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Computer Science Blog.</p>
        <p>
          Technology is love, empowering our generation to reach new heights and to hope for a better future, From the internet to artificial intelligence to embedded devices, technology conquered our lives.
        </p>
        <p>Now a new wave of technology <span role="img" aria-label="wave emoji">👋</span>RPA(Robotic Process Automation),<span role="img" aria-label="wave emoji">👋</span>Blockchain, <span role="img" aria-label="wave emoji">👋</span>Cognitive Cloud Computing, <span role="img" aria-label="wave emoji">👋</span>Internet of Things, <span role="img" aria-label="wave emoji">👋</span>Autonomous cars, <span role="img" aria-label="wave emoji">👋</span>Flying Cars and many others will seek to disrupt our ways of living. </p>
        <p>This blog is focused on how those technologies were built. I focus on programming, engineering and design.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
