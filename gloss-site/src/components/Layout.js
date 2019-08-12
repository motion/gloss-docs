import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"

import Nav from "./Nav"

const Main = styled.main`
  margin: 
`

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
