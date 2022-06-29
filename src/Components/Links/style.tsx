import styled from "styled-components";

export const NameLink = styled.a`
color: var(--white-00);
text-decoration: none;
display: inline-block;
font-size: 2em;
font-weight: 600;
text-transform: uppercase;
transition: filter 0.2s;
&:hover{
    cursor: pointer;
    filter: brightness(0.8);
}
`;