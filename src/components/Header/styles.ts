import styled from 'styled-components';

interface HeaderProps {
    variantButton: 'purple-light' | 'yellow-light';
    variantText: 'purple' | 'yellow';   
}

export const HeaderNavBar= styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
`
export const HeaderBox = styled.div<HeaderProps>`
    background-color: ${props => props.theme[props.variantButton]};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 6px;
    gap: 0.25rem;

    span{
        font-size: 0.875rem;
        color: ${props => props.theme['purple-dark']};
        line-height: 1.1375rem;
        font-weight: 500;
    }
    
    svg {
        fill: ${props => props.theme[props.variantText]};
    }

    a{
        display: flex;
    }
`
export const HeaderWrapper = styled.section`
    display: flex;
    gap: 0.75rem;
`

