import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutCart } from './components/CheckoutCart';
import { CheckoutInfo } from './components/CheckoutInfo';
import { CheckoutPayments } from './components/CheckoutPayments';
import { CheckoutColumns, CheckoutContainer } from './styles';

interface IPaymentMethod {
    string: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro';
}

export default function  Checkout() {
    const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod>('Cartão de crédito');
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        navigate(`/checkout/success/${paymentMethod}`)
        
    }
    return (
        <CheckoutContainer>
            <form>
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
                    <CheckoutCart onSubmit={handleSubmit}/>
                </CheckoutColumns>
            </form>
        </CheckoutContainer>
    )
}
