import styled from 'styled-components';

export const QuantitySelectorInput = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    max-width: 4.5rem;
    background-color: ${props => props.theme['base-button']};

    input{
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        -moz-appearance: textfield; /* Firefox */
        appearance: textfield; /* outros navegadores */
        max-width: 1.5rem;
        justify-content: center;
        text-align: center;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
    svg{
        cursor: pointer;
        color: ${props => props.theme.purple};
    }
`