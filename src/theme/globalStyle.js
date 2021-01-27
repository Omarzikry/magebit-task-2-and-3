import { createGlobalStyle } from "styled-components";
import checkImg from "../assets/imgs/ic_checkmark.svg";
import pineappleImg from "../assets/imgs/image_summer.png";
const GlobalStyle = createGlobalStyle`

// Reset Styles start

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// Reset Styles end


// Global Styles start

*,
*::after,
*::before {
  box-sizing: border-box;
}
html {
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
  font-family: Arial, Helvetica, sans-serif;
}
html,
body {
  background: linear-gradient(180deg, #fff 0%, #f2f5fa 100%);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

// links

a {
  color: ${(props) => props.theme.colors.black};
  text-decoration: underline;
  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
  &:visited {
    color: ${(props) => props.theme.colors.darkBlue};
  }
}


// custom checbox
input[type="checkbox"] {
  display: none;
}

[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 2.3em;
  line-height: 1.625rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.grey};
  display: flex;
  align-items: center;
}

[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.625rem;
  height: 1.625rem;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  background: ${(props) => props.theme.colors.white};
  border-radius: 0.18em;
  transition: background-color 0.2s;
}

[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "";
  background-image: url(${checkImg});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 1.625rem;
  height: 1.625rem;
  line-height: 0;
  opacity: 0;
  transform: scale(0) rotate(45deg);
}

/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  animation: unchecked 0.2s ease-in-out forwards;
}

[type="checkbox"]:checked + label:after {
  animation: checked 0.2s ease-in-out 0.2s forwards;
}
[type="checkbox"]:checked + label:before {
  background-color: ${(props) => props.theme.colors.blue};
}

@keyframes checked {
  0% {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
}
@keyframes unchecked {
  0% {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }
}


@media (max-width: 768px) {
  body {
    background-image: url(${pineappleImg});
    background-position: center;
    background-size: cover;
  }
}


`;

export default GlobalStyle;
