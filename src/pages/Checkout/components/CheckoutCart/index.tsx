import {useContext, FormEvent} from 'react';

import { CartContext } from '../../../../contexts/CartContext';
import { ProductItem  } from '../ProductItem';
import { floatToMoney } from '../../../../utils/money';
import { CartItem } from '../../../../interfaces/CartItem';
import { CheckoutCartContainer, CheckoutPrices, CheckoutTotalPrice, CheckoutConfirmButton} from './styles';

interface CheckoutCartProps{
  onSubmit: (event: FormEvent) => void;
}

export function CheckoutCart({ onSubmit }: CheckoutCartProps) {
  const { cartItems, total, removeCartItem, changeQuantityCartItem } = useContext(CartContext);

  const frete = 3.50;
  const totalOrder = total + frete;
  const productItems = cartItems.map((item: CartItem) => (<ProductItem key={item.id} item={item} removeCartItem={removeCartItem} changeQuantityCartItem={changeQuantityCartItem} />));

  return (
    <CheckoutCartContainer>
      {productItems}
      <CheckoutPrices>
          <div>
              <span>Total de itens</span>
              <span>{floatToMoney(total)}</span>
          </div>
          <div>
              <span>Entrega</span>
              <span>{floatToMoney(frete)}</span>
          </div>
          <CheckoutTotalPrice>
              <h5>Total</h5>
              <h5>{floatToMoney(totalOrder)}</h5>
          </CheckoutTotalPrice>
      </CheckoutPrices>
      <form action="/checkout/success">
          <CheckoutConfirmButton type="submit">
              confirmar pedido
          </CheckoutConfirmButton>
      </form>
    </CheckoutCartContainer>
      
  )
}
