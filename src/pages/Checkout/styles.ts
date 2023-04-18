import styled from 'styled-components';

import { GlobalContainer } from '../../styles/global';
import { device } from '../../utils/device';

export const CheckoutContainer = styled.section`
    ${GlobalContainer}
    
    form{
        display: flex;
        gap: 2rem;
        justify-content: space-between;

        ${device.tablet}{
            flex-direction: column;
            padding-bottom: 1rem;
        }
        
        h2{
            font-size: 1.125rem;
            color: ${props => props.theme['base-subtitle']};

            ${device.mobileL}{
                padding-left: 1rem;
            }
        }
    }
    
`
export const CheckoutColumns = styled.article`
    display: flex;
    gap: .75rem;
    flex-direction: column;

    ${device.tablet}{
        align-items:center;
    }
`
