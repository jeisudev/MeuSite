import {createGlobalStyle} from "styled-components";

export const GlobalStyle =  createGlobalStyle`

:root{
    --black-00: #000000;
}

*{
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background:var();
}

`;