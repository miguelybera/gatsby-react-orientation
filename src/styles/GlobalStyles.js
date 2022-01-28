import { createGlobalStyle } from "styled-components"
import "@fontsource/montserrat"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: "Montserrat";
        font-weight: 500;
        font-style: normal;
        color: #464F54;
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
        min-height: 100%;
    }

    body {
        background-color: #ffffff;
    }
`
