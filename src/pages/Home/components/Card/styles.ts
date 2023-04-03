import styled from 'styled-components';

interface ICardInput {
    variantColor: 'purple' | 'base-text';
}
export const CardProduct = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    border-radius: 6px 36px;
    gap: 1rem;
    padding-top: 7rem;
    position: relative;
    background-color: ${props => props.theme['base-card']};

    img{
        width: 120px;
        height: 120px;
        max-width: 100%;
        position: absolute;
        top: -1.25rem;
    }
`
export const CardType = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    gap: .25rem;
    width: 100%;
    span{
        font-size: .625rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: .25rem .5rem; 
        border-radius : 100px;
        color: ${props => props.theme['yellow-dark']};
        background-color: ${props => props.theme['yellow-light']};
    }
`
export const CardInfo = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;

    h3{
        font-size: 1.25rem;
    }
    p{
        font-size: .875rem;
        line-height: 1.137rem;
        text-align: center;
        color: ${props => props.theme['base-label']};
    }
`
export const CardAction = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.4375rem;
    padding: 0 .25rem;
    width: 100%; 
`
export const CardPrice = styled.div`
    display: flex;
    align-items: center;

    h3{
        font-size: 1.5rem;
    }
    span{
        font-size: .875rem;
        font-family: 'Roboto';
        font-weight: 400;
    }
  
`
export const CardForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;

    button{
        padding: .5rem;
        border-radius: 6px;
        box-shadow:none;
        border:none;
        display: flex;
        cursor: pointer;
        background-color: ${props => props.theme['purple-dark']};
    }
`