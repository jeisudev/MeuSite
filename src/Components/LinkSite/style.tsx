import styled from "styled-components";

export const Conteudo = styled.div`
position: absolute;
display: flex;
flex-direction: column;
right: 100px;
`;
export const List = styled.li`
list-style: none;
.ancora{
  position: relative;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  text-decoration: none;
  border: 1px solid #fff;
  margin: 10px 0 0;
  &:hover{
    background: var(--white-00);
  }
  .img{
    filter: invert(1);
    max-width: 20px;
    mix-blend-mode: difference;
  }
}
`;