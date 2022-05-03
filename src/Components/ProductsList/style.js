import styled from "styled-components";

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 15px;
  overflow-x: scroll;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ContainerDiv = styled.div`
  margin: 50px 15px;
  align-self: center;
  text-align: center;
  background: #fddd5e;
  color: grey;
  border: 1px solid grey;
  border-radius: 4px;

  h3 {
    font-weight: lighter;
    margin: 5px;
  }

  @media (min-width: 768px) {
    margin: 50px 4%;
  }
`;
