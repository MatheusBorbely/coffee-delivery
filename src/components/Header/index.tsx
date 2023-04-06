import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'phosphor-react';
import { ShoppingCart } from 'phosphor-react';

import logo from '../../assets/logo.svg';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import { HeaderBox, HeaderCounter, HeaderNav, HeaderWrapper } from './styles';

export function Header() {
  const { quantityTotalItems } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const existAddress = user?.cidade;
  const existProductCart = quantityTotalItems > 0;
  return (
    <HeaderWrapper>
      <Link to={"/"}>
        <img src={logo} alt="coffee delivery" />
      </Link>
      <HeaderNav>
        {existAddress &&
          <HeaderBox variantButton='purple-light' variantText='purple'>
            <MapPin size={22} weight="fill"/>
            <span>{user?.cidade}, {user?.uf}</span>
          </HeaderBox>
        }
        <HeaderBox variantButton='yellow-light' variantText='yellow'>
          <Link to={"/checkout"}>
            {existProductCart &&
              <HeaderCounter>
                {quantityTotalItems}
              </HeaderCounter>
            }
            <ShoppingCart size={22} weight="fill"/>
          </Link>
        </HeaderBox>   
      </HeaderNav>
    </HeaderWrapper>
  )
}
