import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 5px 10px 8px #FDDD5E;
    height: 60px;
    margin-bottom: 60px;
    color: grey;
    font-weight: bolder;

    ::-webkit-scrollbar{
        display: none;
    }
    
    h1{
        margin: 0 7px;
        font-size: 25px;
        border-bottom: 1px solid #FDDD5E;
        cursor: pointer;

        span{
            color: #FDDD5E;
            border-bottom: 1px solid black;
        }
    }
    
    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 115px;
        margin: 0 7px;
        border-bottom: 1px solid #FDDD5E;
        cursor: pointer;

        .cart-img{
            width: 20px;
            height: 25px;
            color: #FDDD5E;
            border-bottom: 1px solid black;
        }

        p{
            font-size: 20px;
            margin-top: 1px;
            height: 25px;
            font-weight: bold;
        }
    }
`