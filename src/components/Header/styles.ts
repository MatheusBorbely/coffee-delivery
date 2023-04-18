import styled from 'styled-components';
import { GlobalContainer } from '../../styles/global';
import { device } from '../../utils/device';

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

    
    ${device.tablet}{
        padding: 2rem 1rem;
        box-sizing: border-box;
        img{
            max-width: 65px;
        }
    }

`
export const HeaderBox = styled.div<HeaderProps>`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 6px;
    gap: 0.25rem;
    position: relative;
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
export const HeaderCounter = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .75rem;
    color: white;
    position: absolute;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    right: -8.35px;
    top: -8px;
    background-color: ${props => props.theme['yellow-dark']};
`

