import styled from 'styled-components';
import banner from '../../../../assets/banner-background.svg'

interface BannerProps {
    variantBackground: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'; 
}

export const BannerContainer = styled.article`
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5.875rem;
    min-height: 544px;
    background-position-y: 80%;
`
export const BannerWrapper = styled.section`
    display: flex;
    gap: 4.8125rem;
    justify-content: space-between;
    align-items: flex-start;
`

export const BannerInfo = styled.div`
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
export const BannerImage = styled.div`

`
export const BannerList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
    flex-wrap: wrap;
`
export const BannerListItem = styled.li<BannerProps>`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .75rem;

        svg{
            background-color: ${props => props.theme[props.variantBackground]};
            width: 2rem;
            height: 2rem;
            padding: 0.5rem;
            fill: white;
            border-radius: 50%;
            color: ${(props) => props.theme['white']};
        }
`
