import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { CheckoutPaymentsContainer, PaymentMethod } from "./styles";
import { IPaymentMethod } from '../..';

interface CheckoutPaymentsProps {
    payment: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro',
    onChangePaymentMethod: (payment: IPaymentMethod) => void;
}

enum paymentOptions  {
    credit =  'Cartão de crédito',
    debit = 'Cartão de débito',
    money = 'Dinheiro'
} 

export function CheckoutPayments({payment, onChangePaymentMethod}: CheckoutPaymentsProps) {

    const isCredit = payment === paymentOptions.credit;
    const isDebit = payment === paymentOptions.debit;
    const isMoney = payment === paymentOptions.money;

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
            <PaymentMethod type="button" active={isCredit} onClick={() => onChangePaymentMethod({payment: paymentOptions.credit})} >
                <CreditCard size={16}  />
                <p>Cartão de crédito</p>
            </PaymentMethod>
            <PaymentMethod type="button" active={isDebit} onClick={() => onChangePaymentMethod({payment: paymentOptions.debit})}>
                <Bank size={16} />
                <p>Cartão de débito</p>
            </PaymentMethod>
            <PaymentMethod type="button" active={isMoney} onClick={() => onChangePaymentMethod({payment: paymentOptions.money})}>
                <Money size={16} />
                <p>Dinheiro</p>
            </PaymentMethod>
        </section>
      </CheckoutPaymentsContainer>
    )
  }
  