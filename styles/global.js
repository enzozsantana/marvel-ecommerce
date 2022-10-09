import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Gemunu Libre', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;