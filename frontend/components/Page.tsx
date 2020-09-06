import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Meta from "./Meta";

const theme = {
  black: "#14130e",
  brown: "#d5995a",
  white: "#ebeef0",
  maxWidth: "1440px"
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
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
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
  margin: 0 auto;
`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Inner>{children}</Inner>
      </StyledPage>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Page;
