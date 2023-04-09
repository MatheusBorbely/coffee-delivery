import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { useLocation } from "react-router-dom";
import {useContext} from "react"
import Delivery from '../../assets/Illustration.svg';
import { UserContext } from "../../contexts/UserContext";
import { CheckoutSuccessContainer, CheckoutSuccessContent, CheckoutSuccessInfo, CheckoutSuccessInfoBold } from './styles';

export function CheckoutSuccess() {
    const location = useLocation();
    const paymentMethod = location.state?.paymentMethod;
    const { user } = useContext(UserContext)
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
                            <span>Entrega em <CheckoutSuccessInfoBold> {user?.rua}, {user?.numero}</CheckoutSuccessInfoBold></span>
                            <span>{user?.bairro} - {user?.cidade}, {user?.uf} </span>
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
                            <CheckoutSuccessInfoBold>{paymentMethod.payment}</CheckoutSuccessInfoBold>
                        </div>
                    </CheckoutSuccessInfo>
                </CheckoutSuccessContent>
                <img src={Delivery} />
            </section>
        </CheckoutSuccessContainer>
    );
}