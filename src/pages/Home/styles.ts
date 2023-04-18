import styled from 'styled-components';
import { GlobalContainer } from '../../styles/global';
import { device } from '../../utils/device';

export const ProductContainer = styled.section`
    ${GlobalContainer}

    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    color: ${props => props.theme['base-subtitle']};

    h2{
        font-size: 2rem;
        line-height: 2.6rem;
    }
`
export const ProductGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin: 3.375rem 0;
       
    ${device.tablet}{
        grid-template-columns: 1fr 1fr 1fr;  
    }
    ${device.mobileL}{
        grid-template-columns: 1fr 1fr;  
    }
    ${device.mobile}{
        grid-template-columns: 1fr;
    }

`
