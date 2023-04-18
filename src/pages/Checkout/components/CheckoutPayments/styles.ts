import styled from 'styled-components';
import { CheckoutCard } from '../Card/styles';
import { device } from '../../../../utils/device';

interface PaymentMethodProps{
    active: true | false;
}

export const CheckoutPaymentsContainer = styled(CheckoutCard)`
    border-radius: 6px;

    header{
        display: flex;
        gap: .5rem;
    }
    h3{
        color: ${props => props.theme['base-subtitle']};
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Roboto';
    }    
    span{
        font-size: .875rem;
    }
    svg{
        color: ${props => props.theme['purple']};
    }
    section{
        display: flex;
        gap: .75rem;

        ${device.tablet}{
            flex-direction: column;
        }
    }
    

`
export const PaymentMethod = styled.button<PaymentMethodProps>`
    border-radius: 6px;
    border: 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    width: 33%;
    cursor: pointer;
    border: 1px solid transparent;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.1875rem;
    background: ${(props) => props.active ? props.theme['purple-light'] : props.theme['base-button']};
    color: ${(props) =>  props.theme['base-text']};
    border-color: ${(props) => props.active && props.theme['purple-dark']};
    

    &:hover {
        background: ${(props) => props.active ? `inerent` : props.theme['base-hover']};
        color: ${(props) => props.theme['base-subtitle']};    
    }
    svg {
        color: ${(props) =>props.theme['purple']};
    }

    ${device.tablet}{
        width:100%;
        justify-content: center;
    }
`;


