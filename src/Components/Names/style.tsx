import styled from "styled-components";

export const Settings = styled.a`
font-family: sans-serif;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
color: var(--white-00);
padding: 7px;
&:hover{
    cursor: pointer;
    color: var(--black-01);
    border: 4px solid var(--white-00);
    border-radius: 30px;
    background: var(--white-00);
}
`;