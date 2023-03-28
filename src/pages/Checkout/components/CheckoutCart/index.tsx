import { ProductItem  } from '../ProductItem';
import { CheckoutCartContainer, CheckoutPrices, CheckoutTotalPrice, CheckoutConfirmButton} from './styles';


export function CheckoutCart() {
  return (
    <CheckoutCartContainer>
      <ProductItem />
      <ProductItem />
      <CheckoutPrices>
          <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
          </div>
          <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
          </div>
          <CheckoutTotalPrice>
              <h5>Total</h5>
              <h5>R$ 33,20</h5>
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
