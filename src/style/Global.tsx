import {createGlobalStyle} from "styled-components";

export const GlobalStyle =  createGlobalStyle`

:root{
    
    --black-00: #000000;

    --white-00: #FFFF;

    --blue-00: #40c3ff;
}

*{
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background: linear-gradient(92.5deg, #4677FF 23.4%, #27144A 115.48%);
}

`;