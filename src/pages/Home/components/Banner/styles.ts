import styled from 'styled-components';

import banner from '../../../../assets/banner-background.svg';
import { GlobalContainer } from '../../../../styles/global';

interface BannerProps {
    variantBackground: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'; 
}

export const BannerContainer = styled.section`
    padding-top: 5.875rem;
    height: 34rem;
    &:before {
        content: '';
        background-image: url(${banner});
        background-position: center;
        position: absolute;
        max-height: 34rem;
        width: 100%;
        height: 100%;
        left: 0;
        top: 6.75rem;
        filter: blur(5px);
        z-index: 1;
    }
`
export const BannerWrapper = styled.div`
    ${GlobalContainer}

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4.8125rem;
    position: relative;
    z-index: 2;   
`
export const BannerInfo = styled.article`
    display: flex;
    gap: 4.125rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const BannerTitle = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;

    h1{
        font-size: 3rem;
        line-height: 3.9rem;
        color: ${props => props.theme['base-title']};
    }

    p{
        font-size: 1.25rem;
        line-height: 1.625rem;
        color: ${props => props.theme['base-subtitle']};
    }
`
export const BannerList = styled.ul`
    display: grid;
    grid-template-columns: 14.4375rem 18.375rem;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    list-style-type: none;
`
export const BannerListItem = styled.li<BannerProps>`
        display: flex;
        align-items: center;
        gap: .75rem;
        line-height: 1.3rem;
        flex-direction: row;

        svg{
            width: 2rem;
            height: 2rem;
            padding: 0.5rem;
            fill: white;
            border-radius: 50%;
            color: ${(props) => props.theme['white']};
            background-color: ${props => props.theme[props.variantBackground]};
        }
`
