import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('<link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300&family=Fira+Sans:ital,wght@0,300;0,400;1,500&family=Rubik:wght@500;700&display=swap" rel="stylesheet">');
*  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
        background: rgb(70,46,90);
        background: linear-gradient(90deg, rgba(70,46,90,1) 0%, rgba(120,92,177,1) 40%, rgba(214,171,204,1) 100%);
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Fira Sans', sans-serif;
    }

    span, a {
        font-family: 'Fira Sans Condensed', sans-serif;
    }

    h1 {
        font-family: 'Rubik', sans-serif;
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
