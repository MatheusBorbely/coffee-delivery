import styled from 'styled-components';
import banner from '../../../../assets/banner-background.svg';
import { GlobalContainer } from '../../../../styles/global';

interface BannerProps {
    variant: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'; 
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
        color: ${props => props.theme['base-subtitle']};
        line-height: 1.625rem;
    }
`
export const BannerList = styled.ul`
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    gap: 1.2rem 2.8125rem;
    
    & li{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .75rem;
    }
`
export const Circle = styled.div<BannerProps>`
    background-color: ${props => props.theme[props.variant]};
    padding: .2rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
