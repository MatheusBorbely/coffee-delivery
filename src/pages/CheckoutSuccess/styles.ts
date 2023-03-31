import styled from 'styled-components';
import { GlobalContainer } from '../../styles/global';

export type ItemBackground = 'yellow-dark' | 'yellow' | 'purple';

interface ColorBackground {
    color: ItemBackground;
}

export const CheckoutSuccessContainer = styled.article`
    ${GlobalContainer}

    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    header {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        h2 {
            font-weight: 800;
            font-size: 2rem;
            line-height: 2.625rem;
            color: ${(props) => props.theme['yellow-dark']};
        }
        h6 {
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 1.625rem;
            color: ${(props) => props.theme['base-subtitle']};
        }
    }
    section {
        display: flex;
        gap: 6.375rem;
    }
`;

export const CheckoutSuccessContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2.5rem;
    gap: 2rem;
    border-radius: 6px 36px;
    position: relative;
    background: ${(props) => props.theme['background']};
    min-width: 32.875rem;

    &:before {
        content: '';
        background: linear-gradient(120deg, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']});
        position: absolute;
        top: -1px;
        left: -1px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        z-index: -1;
        border-radius: 6px 36px;
    }
`;

export const CheckoutSuccessInfo = styled.div<ColorBackground>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    svg {
        border-radius: 1000px;
        padding: 0.5rem;
        color: ${(props) => props.theme['white']};
        ${props => {
            return `background-color: ${props.theme[props.color]}`
        }}
    }
    div {
        display: flex;
        flex-direction: column;
        span {
            display: flex;
            gap: 0.25rem;
            line-height: 1.3125rem;
        }
    }
`;

export const CheckoutSuccessInfoBold = styled.p`
    line-height: 1.3125rem;
    font-weight: 700;
`;