import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../utils/theme'
import { GlobalStyles } from './global'
import { rhythm, scale } from "../utils/typography"
import Button from "../components/button"

class Layout extends React.Component {
  state = {
    theme: "light"
  }
  
  toggleTheme = () => {
    // if the theme is not light, then set it to dark

    if (this.state.theme === 'light') {
      this.setState({
        theme: 'dark'
      });
    // otherwise, it should be light
    } else {
      this.setState({
        theme: 'light'
      });
    }
  }

  render() {
    const { location, title, children } = this.props
    const theme = this.state.theme
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Wrapper>
          <GlobalStyles />
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <HeaderLinks>
                <Link to="/"><Button marginTop="35px">Home</Button></Link>
                <Link to="/blog/"><Button marginTop="35px">Blog</Button></Link>
                 <Link to="/contact/"><Button marginTop="35px">Contact</Button></Link>
            </HeaderLinks>
            <button onClick={this.toggleTheme}>Toggle theme</button>
            <header>{header}</header>
            <main>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()},
            {` `}
            <a href="https://clouditate.com">Theophilus Ngaribvume</a>
          </Footer>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`
const HeaderLinks = styled.div`
  display: inline-flex;
  padding-right: 10px;
  margin-bottom: 20px;
`
export default Layout
