import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
` 

const NavContent = styled.div`
  background-color: rgb(224, 176, 229);
  padding: 20px 40px;
`

const Title = styled.span`
  font-size: 1.5em;
`

const Version = styled.span`

`

export default () => {
  return (
    <Nav>
      <NavContent>
        <Title>Gloss</Title>
        <Version>v7.0.0</Version>
      </NavContent>
    </Nav>
  )
};
