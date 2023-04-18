import { createGlobalStyle } from 'styled-components';
import {css} from 'styled-components';
import { device } from '../utils/device';

export const  GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: transparent !important;
        box-shadow: 0 0 2px ${props => props.theme['yellow-dark']};
    }

    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme['base-text']};
        line-height: 130%;
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }

    li {
        list-style: none; 
    }
    
    a{
        text-decoration: none;
    }
    
    h1, h2, h3, h4{
        font-family: 'Baloo 2';
    }

    ${device.tablet} {
        html{
            font-size: 87.5%;
        }
        main{
            padding: 0 1rem;
        }
    }
`
export const  GlobalContainer = css`
    width: 70rem;
    margin: 0 auto;
    box-sizing: content-box;
    max-width: 100%;
`
