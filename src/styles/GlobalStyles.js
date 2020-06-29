import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary: #9f45a4;
        --light-primary: #D6ABCC;
        --secundary: #6438BC;
        --dark-purple: #462e5a;
        --gray: #BAB7C5;
        --white: #f3f2f4;
        --black: #070611;
    }
`;
