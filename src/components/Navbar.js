import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Navbar = () => {
  return (
    <NavbarContainer>
      <AccountBtn>
        <StaticImage
          src="../images/account-image.png"
          alt="account image"
          placeholder="none"
        />
      </AccountBtn>
      <AccountMenu>
        <Link to="/">Settings</Link>
        <Link to="/">Logout</Link>
      </AccountMenu>
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 80px;
  width: 100%;
  background: linear-gradient(180deg, #45b6f0 0%, #1f94d0 100%);
  padding: 0 40px;
`

const AccountBtn = styled.button`
  all: unset;
  display: inline-block;
`

const AccountMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  width: 150px;
  bottom: -30px;
  right: 40px;

  a {
    width: 100%;
    text-align: center;
  }
`
