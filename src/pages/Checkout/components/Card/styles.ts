import styled from 'styled-components';
import { device } from '../../../../utils/device';

export const CheckoutCard = styled.section`
    background-color: ${props => props.theme['base-card']};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    width: 40rem;
    max-width: 100%;

    ${device.mobileL}{
        max-width: 90%;
        margin: 0 auto;
        padding: 1.5rem;
    }
    

    
`