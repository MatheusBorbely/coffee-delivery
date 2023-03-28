import { CheckoutPaymentsContainer, PaymentMethod } from "./styles";
import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';

export function CheckoutPayments() {
    return (
      <CheckoutPaymentsContainer>
        <header>
            <CurrencyDollar size={22} />
            <div>
                <h3>Pagamento</h3>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
        </header>
        <section>
            <PaymentMethod>
                <CreditCard size={16} />
                <p>Cartão de crédito</p>
            </PaymentMethod>
            <PaymentMethod>
                <Bank size={16} />
                <p>Cartão de débito</p>
            </PaymentMethod>
            <PaymentMethod>
                <Money size={16} />
                <p>Dinheiro</p>
            </PaymentMethod>
        </section>
      </CheckoutPaymentsContainer>
    )
  }
  