import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Meta from "./Meta";
import Nav from "./Nav";

const theme = {
  black: "#14130e",
  brown: "#d5995a",
  white: "#ebeef0",
  midWidth: "770px",
  maxWidth: "1440px"
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;

    @media (min-width: ${props => props.theme.midWidth}) {
      font-size: 12px;
    }
    @media (min-width: ${props => props.theme.maxWidth}) {
      font-size: 14px;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.4em;
    line-height: 2;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  display: grid;
  position: relative;
  padding: 10rem 2rem;
  margin: 0 auo;
`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Nav />
        <Inner>{children}</Inner>
      </StyledPage>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Page;
