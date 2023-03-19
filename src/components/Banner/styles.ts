import styled from 'styled-components';
import banner from '../../assets/banner-background.svg'

export const BannerContainer = styled.section`
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
`
export const BannerWrapper = styled.div`
    display: flex;
    gap: 3.5rem;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 5.875rem;
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
