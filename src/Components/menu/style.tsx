import styled from "styled-components";

export const CentralContainer = styled.div`   
position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background: var(--blue-00);
  z-index: 1;
  display: grid;
  place-items: center;
  transition: 0.5s;
&.active{
    right: 0;
}
`;

export const ListMenu = styled.ul`
    
display: flex;
flex-direction: column;
    
`;