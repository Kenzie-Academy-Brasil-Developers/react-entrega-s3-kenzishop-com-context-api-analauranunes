import styled from "styled-components";

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  color: grey;

  .total-p{
    border-bottom: 1px solid grey;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    color: grey;

    h3 {
      margin-bottom: 20px;
    }

    img {
      width: 200px;
      height: 150px;
      margin-left: -15px;
    }
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 60px;
    min-width: 95%;
    margin: 0;

    img {
      width: 110px;
      object-fit: contain;
      height: 50px;
   
    }

    button {
      width: 40px;
      height: 30px;
      /* font-size: 10px; */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media(min-width: 768px) {
      li{
        min-width: 60%;
      }
    }
`;
