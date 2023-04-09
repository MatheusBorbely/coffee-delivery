import { FormEvent, InvalidEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutCart } from './components/CheckoutCart';
import { CheckoutInfo } from './components/CheckoutInfo';
import { CheckoutPayments } from './components/CheckoutPayments';
import { CheckoutColumns, CheckoutContainer } from './styles';

export interface IPaymentMethod {
    payment: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro';
}

export default function  Checkout() {
    const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod>({payment: 'Cartão de crédito'});
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        navigate('/checkout/success', { state: {paymentMethod}} )
    }

    function handleChangePaymentMethod(payment: IPaymentMethod) {
        setPaymentMethod(payment)
    }

    const handleInvalidForm = (event: InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório !')
    }
    return (
        <CheckoutContainer>
            <form action="/checkout/success">
                <CheckoutColumns>
                    <header>
                        <h2>Complete seu pedido</h2>
                    </header>
                    <CheckoutInfo onInvalidForm={handleInvalidForm} />
                    <CheckoutPayments payment={paymentMethod.payment} onChangePaymentMethod={handleChangePaymentMethod}/>
                </CheckoutColumns>
                <CheckoutColumns>
                    <header>
                        <h2>Cafés selecionados</h2>
                    </header>
                    <CheckoutCart onSubmit={handleSubmit}/>
                </CheckoutColumns>
            </form>
        </CheckoutContainer>
    )
}
