import styled from 'styled-components';
import { GlobalContainer } from '../../styles/global';

interface HeaderProps {
    variantButton: 'purple-light' | 'yellow-light';
    variantText: 'purple' | 'yellow';   
}

export const HeaderWrapper= styled.header`
    ${GlobalContainer}

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

`
export const HeaderBox = styled.div<HeaderProps>`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 6px;
    gap: 0.25rem;
    background-color: ${props => props.theme[props.variantButton]};

    span{
        font-size: 0.875rem;
        line-height: 1.1375rem;
        font-weight: 500;
        color: ${props => props.theme['purple-dark']};
    }
    
    svg {
        fill: ${props => props.theme[props.variantText]};
    }

    a{
        display: flex;
    }
`
export const HeaderNav = styled.section`
    display: flex;
    gap: 0.75rem;
`

