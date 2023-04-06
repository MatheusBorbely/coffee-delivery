import styled from 'styled-components';

import { GlobalContainer } from '../../styles/global';

export const CheckoutContainer = styled.section`
    ${GlobalContainer}
    
    form{
        display: flex;
        gap: 2rem;
        justify-content: space-between;

        h2{
            font-size: 1.125rem;
            color: ${props => props.theme['base-subtitle']};
        }
    }
    
`
export const CheckoutColumns = styled.article`
    display: flex;
    gap: .75rem;
    flex-direction: column;
`
