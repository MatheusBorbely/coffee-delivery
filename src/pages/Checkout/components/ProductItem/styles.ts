import styled from 'styled-components';

export const ProductItemContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5rem 0.25rem;
    gap: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};
    background: ${(props) => props.theme['base-card']};
    
    article {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        img {
            width: 4rem;
        }
       > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            gap: 0.5rem;
            h3 {
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.3125rem;
                color: ${(props) => props.theme['base-subtitle']};
            }
        }
    }
    span {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.3125rem;
        width: max-content;
        color: ${(props) => props.theme['base-text']};
    }
`
export const ProductItemActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    div {
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        gap: 0.25rem;
        background: ${(props) => props.theme['base-button']};
        svg {
            cursor: pointer;
            color: ${(props) => props.theme['purple']};
            &:hover {
                color: ${(props) => props.theme['purple-dark']};
            }
        }
        span {
            width: fit-content;
        }
    }
`
export const ProductItemActionRemove = styled.div`
    width: 5.6875rem;
    cursor: pointer;
    &:hover {
        background: ${(props) => props.theme['base-hover']};
    }
    span {
        font-weight: 400;
        font-size: 0.75rem;
        text-transform: uppercase;
        line-height: 1.1875rem;
        color: ${(props) => props.theme['base-text']};
    }
`
