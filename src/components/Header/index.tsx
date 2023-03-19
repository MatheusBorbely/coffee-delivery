import { HeaderBox, HeaderNavBar, HeaderWrapper } from './styles'
import { GlobalContainer } from '../../styles/global'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { MapPin } from 'phosphor-react'
import { ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <GlobalContainer>
      <HeaderNavBar>

        <Link to={"/"}>
          <img src={logo} alt="coffe delivery" />
        </Link>

        <HeaderWrapper>
          <HeaderBox variantButton='purple-light' variantText='purple'>
            <MapPin size={22} weight="fill"/>
            <span>Porto Alegre, RS</span>
          </HeaderBox>
          <HeaderBox variantButton='yellow-light' variantText='yellow'>
            <Link to={"/checkout"}>
              <ShoppingCart size={22} weight="fill"/>
            </Link>
          </HeaderBox>   
        </HeaderWrapper>

      </HeaderNavBar>
    </GlobalContainer>
  )
}
