import styled from 'styled-components';
import { CheckoutCard } from '../Card/styles';

export const CheckoutInfoContainer = styled(CheckoutCard)`
    font-family: 'Roboto';
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
        color: ${props => props.theme['yellow-dark']};
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`
export const InputContainer = styled.div`
    display: flex;
    gap: 1rem;
    input {
        background: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 4px;
        height: 2.625rem;
        width: 100%;
        padding: 0.75rem;
        ::placeholder {
            color: ${(props) => props.theme['base-label']};
            line-height: 1.125rem;
        }
    }
`;