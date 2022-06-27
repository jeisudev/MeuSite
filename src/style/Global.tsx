import {createGlobalStyle} from "styled-components";

export const GlobalStyle =  createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');

:root{
    --black-01: #0B0B0B;
    --black-02: #000000;
    --gray-00: #909090;
    --gray-01: #C4C4C4;
    --white-00: #FFFF;
    --backgound: #E5E5E5;
}

*{
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: poppins , sans-serif;
}

body{
    background:var(--backgound);
}

`;