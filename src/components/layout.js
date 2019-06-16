import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'container'
    'footer';
  grid
`

const Header = styled.div`
  grid-area: header;
  min-height: 200px;
`
const Container = styled.div`
  grid-area: container;
  min-height: 200px;
`
const Footer = styled.div`
  grid-area: footer;
  min-height: 200px;
`

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
`

const MenuItem = styled(Link)`
  padding: 10px;
  display: flex;
  box-shadow: none;
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <MainContainer>
        <Header>
          <Menu>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="countries">Countries</MenuItem>
            <MenuItem to="cities">Cities</MenuItem>
            <MenuItem to="about">About</MenuItem>
            <MenuItem to="contact">Contact</MenuItem>
          </Menu>
        </Header>
        <Container>{children}</Container>
        <Footer>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://www.ukpopulation.net">uk population</a>
        </Footer>
      </MainContainer>
    )
  }
}

export default Layout
