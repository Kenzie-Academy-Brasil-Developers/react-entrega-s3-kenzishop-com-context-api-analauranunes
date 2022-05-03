import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    
    body{
        font-family: Georgia, 'Times New Roman', Times, serif;
        /* background-color: #F0F0F0; */
    }

    button{
        cursor: pointer;
        border-style: none;
    }

    img{
        width: 50px;
    }

    ul{
        list-style: none;
    }
`;
