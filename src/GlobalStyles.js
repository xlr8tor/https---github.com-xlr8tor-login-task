import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --baseColor: #606468;
    --bodyBackgroundColor: #2c3338;
    --bodyFontFamily: "Open Sans";
    --bodyFontFamilyFallback: sans-serif;
    --bodyFontFamilyFallback: sans-serif;
    --bodyFontSize: 0.875rem;
    --bodyFontWeight: 400;
    --bodyLineHeight: 1.5;
    --anchorColor: #eee;
    --loginLabelBackgroundColor: #363b41;
    --loginInputBackgroundColor: #3b4148;
    --loginInputHoverBackgroundColor: #434a52;
    --loginColor: #eee;
    --loginBorderRadus: 0.25rem;
    --loginSubmitBackgroundColor: #ea4c88;
    --loginSubmitColor: #eee;
    --loginSubmitHoverBackgroundColor: #d44179;
    --formGap: 0.875rem;
    --iconFill: var(--baseColor);
    --border-color: rgba(113 119 144 / 25%);
    --theme-bg-color: rgba(16 18 27 / 10%);
}

*,
::before,
::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: var(--bodyFontFamily), 
    var(--bodyFontFamilyFallback);
  font-size: var(--bodyFontSize);
  font-weight: var(--bodyFontWeight);
  line-height: var(--bodyLineHeight);
}

a {
  color: var(--anchorColor);
  outline: 0;
  text-decoration: none;
}

a:focus,
a:hover {
  text-decoration: underline;
}

ul {
    list-style: none;
}

input {
  background-image: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  transition: background-color 0.3s;
}

input[type="submit"] {
  cursor: pointer;
}

.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
`;
