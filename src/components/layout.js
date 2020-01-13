import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../utils/theme'
import { GlobalStyles } from './global'
import { rhythm, scale } from "../utils/typography"

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
          <button onClick={this.toggleTheme}>Toggle night mode</button>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <header>{header}</header>
            <main>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()}, By
            {` `}
            <a href="https://clouditate.com">Clouditate</a>
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

export default Layout
