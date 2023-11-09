import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: #0F51AA;
  }

  .title {
    font-size: 40px;
    color: orange;
  }


  .number-button-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background-color: #680FAA;
    padding:2px;
  }

  .number-button-container > :nth-child(10) {
    grid-column: 2 / 3;
  }

  .operator-button-container {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background-color: white;
     padding:2px;
  }
 
  .input {
    height:50px;
    border: none;
    background-color: white;
    color: #0b488c;
    font-size : 36px;
    font-weight:bold;
    text-align:center;
    width: 304px;
    outline:none;
  }

`;

export { GlobalStyle };
