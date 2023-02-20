import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
    background-color: ${({ theme }) => theme.primary };
}

ul {
  list-style: none; 
  margin-top: 1rem;
  padding-left: 2rem;
 
}

ul li::before {
  content: "\2022"; 
  font-weight: bold;
  display: inline-block; 
  width: 1.5em;
  color: #8F19E8;
  margin-left: .5em;
  padding-bottom: .5rem;
}

@font-face {
  font-family: LoraBold;
  src: url('/src/assets/fonts/lora/static/Lora-Bold.ttf');
}

@font-face {
  font-family: LoraBoldItalic;
  src: url('/src/assets/fonts/lora/static/Lora-BoldItalic.ttf');
}
@font-face {
  font-family: LoraRegular;
  src: url('/src/assets/fonts/lora/static/Lora-Regular.ttf');
}
@font-face {
  font-family: LoraItalicVariable;
  src: url('/src/assets/fonts/lora/Lora-Italic-VariableFont_wght.ttf');
}
@font-face {
  font-family: LoraVariableFont;
  src: url('/src/assets/fonts/lora/Lora-VariableFont_wght.ttf');
}

@font-face {
  font-family: InterBold;
  src: url('/src/assets/fonts/inter/static/Inter-Bold.ttf');
}

@font-face {
  font-family: InterRegular;
  src: url('/src/assets/fonts/inter/static/Inter-Regular.ttf');
}
@font-face {
  font-family: InterVariableFont;
  src: url('/src/assets/fonts/inter/Inter-VariableFont_slnt\,wght.ttf');
}

@font-face {
  font-family: InconsolataBold;
  src: url('/src/assets/fonts/inconsolata/static/Inconsolata-Bold.ttf');
}

@font-face {
  font-family: InconsolataRegular;
  src: url('/src/assets/fonts/inconsolata/static/Inconsolata-Regular.ttf');
}

@font-face {
  font-family: InconsolataVariableFont;
  src: url('/src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth\,wght.ttf');
}
`

export default GlobalStyles