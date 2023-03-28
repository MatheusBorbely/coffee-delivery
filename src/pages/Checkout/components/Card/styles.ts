import styled from 'styled-components';

export const CheckoutCard = styled.section`
    background-color: ${props => props.theme['base-card']};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    max-width: 40rem;
`