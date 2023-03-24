import { HeaderBox, HeaderNav, HeaderWrapper } from './styles';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { MapPin } from 'phosphor-react';
import { ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <HeaderWrapper>
      <Link to={"/"}>
        <img src={logo} alt="coffee delivery" />
      </Link>
      <HeaderNav>
        <HeaderBox variantButton='purple-light' variantText='purple'>
          <MapPin size={22} weight="fill"/>
          <span>Porto Alegre, RS</span>
        </HeaderBox>
        <HeaderBox variantButton='yellow-light' variantText='yellow'>
          <Link to={"/checkout"}>
            <ShoppingCart size={22} weight="fill"/>
          </Link>
        </HeaderBox>   
      </HeaderNav>
    </HeaderWrapper>
  )
}
