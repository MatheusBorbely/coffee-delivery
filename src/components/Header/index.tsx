import React from 'react'
import { HeaderBox, HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="coffe delivery" />
      <section>
        <HeaderBox></HeaderBox>
        <HeaderBox></HeaderBox>

      </section>
    </HeaderContainer>
  )
}
