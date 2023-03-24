import styled from 'styled-components';
import { GlobalContainer } from '../../styles/global';

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

export const ProductGridContainer = styled.section`
   
`
