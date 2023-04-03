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
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Roboto';
        color: ${props => props.theme['base-subtitle']};
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
        border-radius: 4px;
        height: 2.625rem;
        width: 100%;
        padding: 0.75rem;
        background: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-button']};
        ::placeholder {
            line-height: 1.125rem;
            color: ${(props) => props.theme['base-label']};
        }
    }
`;