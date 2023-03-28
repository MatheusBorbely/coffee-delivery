import styled from 'styled-components';
import { CheckoutCard } from '../Card/styles';

export const CheckoutCartContainer = styled(CheckoutCard)`
    border-radius: 6px 44px;
    max-width: 28rem;
`
export const CheckoutPrices = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 0.75rem;
    width: 100%;
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 0.5rem;
        width: 100%;
        span {
            color: ${(props) => props.theme['base-text']};
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.125rem;
        }
    }
`
export const CheckoutTotalPrice = styled.div`
    h5 {
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.625rem;
    }
`
export const CheckoutConfirmButton = styled.button`
    border-radius: 6px;
    border: 0;
    padding: 0.75rem 0.5rem;
    width: 100%;
    text-transform: uppercase;
    font-stretch: 100;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.375rem;
    cursor: pointer;
    background: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    
    &:hover {
        background: ${(props) => props.theme['yellow-dark']};
    }
`