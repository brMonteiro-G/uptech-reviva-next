import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
        font-family: $font-family-page;
        text-decoration: none;
        overflow-x:hidden ;
        scroll-behavior: smooth;
        box-sizing:border-box;
        padding:0;
        margin:0;
}
*{
  text-decoration:none;
  color:inherit;
  
}

`;
