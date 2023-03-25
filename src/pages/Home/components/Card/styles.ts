import styled from 'styled-components';

interface ICardInput {
    variantColor: 'purple' | 'base-text';
}

export const CardProduct = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme['base-card']};
    padding: 1.25rem;
    border-radius: 6px 36px;
    gap: 1rem;
    padding-top: 7rem;
    position: relative;
   

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
        color: ${props => props.theme['yellow-dark']};
        font-weight: 700;
        text-transform: uppercase;
        background-color: ${props => props.theme['yellow-light']};
        padding: .25rem .5rem; 
        border-radius : 100px;
    }
`
export const CardInfo = styled.section`
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
        color: ${props => props.theme['base-label']};
        text-align: center;
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
export const CardPrice = styled.section`
    display: flex;
    align-items: center;

    h2{
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
        background-color: ${props => props.theme['purple-dark']};
        padding: .5rem;
        border-radius: 6px;
        box-shadow:none;
        border:none;
        display: flex;
        cursor: pointer;
    }
`

export const CardInput = styled.div<ICardInput>`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;
    max-width: 4.5rem;

    input{
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        -moz-appearance: textfield; /* Firefox */
        appearance: textfield; /* outros navegadores */
        max-width: 1.5rem;
        justify-content: center;
        text-align: center;


        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
    svg{
        cursor: pointer;
        color: ${props => props.theme[props.variantColor]};
    }
`