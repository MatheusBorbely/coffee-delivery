import { MapPin, Timer, CurrencyDollar } from "phosphor-react";

import Delivery from '../../assets/Illustration.svg';
import { CheckoutSuccessContainer, CheckoutSuccessContent, CheckoutSuccessInfo, CheckoutSuccessInfoBold } from './styles';

export function CheckoutSuccess() {
    return (
        <CheckoutSuccessContainer>
            <header>
                <h2>Uhu! Pedido confirmado</h2>
                <h6>Agora é só aguardar que logo o café chegará até você</h6>
            </header>
            <section>
                <CheckoutSuccessContent>
                    <CheckoutSuccessInfo color='purple'>
                        <MapPin size={32} weight="fill" />
                        <div>
                            <span>Entrega em <CheckoutSuccessInfoBold> Rua João Daniel Martinelli, 102</CheckoutSuccessInfoBold></span>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </div>
                    </CheckoutSuccessInfo>
                    <CheckoutSuccessInfo color='yellow'>
                        <Timer size={32} weight="fill" />
                        <div>
                            <span>Previsão de entrega</span>
                            <CheckoutSuccessInfoBold>20 min - 30 min</CheckoutSuccessInfoBold>
                        </div>
                    </CheckoutSuccessInfo>
                    <CheckoutSuccessInfo color='yellow-dark'>
                        <CurrencyDollar size={32} />
                        <div>
                            <span>Pagamento na entrega</span>
                            <CheckoutSuccessInfoBold>Cartão de Crédito</CheckoutSuccessInfoBold>
                        </div>
                    </CheckoutSuccessInfo>
                </CheckoutSuccessContent>
                <img src={Delivery} />
            </section>
        </CheckoutSuccessContainer>
    );
}