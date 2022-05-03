import styled from "styled-components";

export const LiStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 280px;
  max-width: 280px;
  height: 320px;
  margin-right: 15px;
  border: 1px solid #FDDD5E;
  background: #FDDD5E;
  color: grey;
  border-radius: 4px;

  img{
      width: 100%;
      height: 200px;
      object-fit: fill;
      border-radius: 3px;
  }

  button{
      width: 160px;
      height: 40px;
      border-radius: 4px;
      background: white;
      color: grey;
      font-size: 15px;
      border: 1px solid lightgray;
  }

  @media(min-width: 768px) {
        margin-bottom: 15px;
    }
`;
