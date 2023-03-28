import { ProductItem  } from './components/ProductItem'
import { CheckoutInfo } from './components/CheckoutInfo'
import { CheckoutPayments } from './components/CheckoutPayments'
import { CheckoutColumns, CheckoutContainer, CheckoutCart, CheckoutPrices, CheckoutTotalPrice, ButtonBuy } from './styles'

export default function  Checkout() {
  return (
    <CheckoutContainer>
        <CheckoutColumns>
            <h2>Complete seu pedido</h2>
            <CheckoutInfo />
            <CheckoutPayments />
        </CheckoutColumns>
        <CheckoutColumns>
            <h3>Cafés selecionados</h3>
            <section>
                <CheckoutCart>
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
                        <ButtonBuy type="submit">
                            confirmar pedido
                        </ButtonBuy>
                    </form>
                </CheckoutCart>
            </section>
        </CheckoutColumns>
    </CheckoutContainer>
  )
}
