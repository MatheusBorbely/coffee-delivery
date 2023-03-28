import styled from 'styled-components';
import { CheckoutCard } from '../Card/styles';

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
    }
`
export const PaymentMethod = styled.button`
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    width: 33%;
    cursor: pointer;
    &:hover {
        background: ${(props) => props.theme['base-hover']};
        p {
            color: ${(props) => props.theme['base-subtitle']};    
        }
    }
    svg {
        color: ${(props) =>props.theme['purple']};
    }
    p {
        color: ${(props) => props.theme['base-text']};
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.1875rem;
    }
`;


