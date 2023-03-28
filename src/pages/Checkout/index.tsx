import { CheckoutCart } from './components/CheckoutCart'
import { CheckoutInfo } from './components/CheckoutInfo'
import { CheckoutPayments } from './components/CheckoutPayments'
import { CheckoutColumns, CheckoutContainer } from './styles'

export default function  Checkout() {
  return (
    <CheckoutContainer>
        <CheckoutColumns>
            <header>
                <h2>Complete seu pedido</h2>
            </header>
            <CheckoutInfo />
            <CheckoutPayments />
        </CheckoutColumns>
        <CheckoutColumns>
            <header>
                <h2>Cafés selecionados</h2>
            </header>
            <CheckoutCart />
        </CheckoutColumns>
    </CheckoutContainer>
  )
}
