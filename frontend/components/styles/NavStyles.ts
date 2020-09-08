import styled from "styled-components";

const NavStyles = styled.nav`
  position: absolute;
  background: ${props => props.theme.white};
  top: 0;
  width: 100%;
  height: 60rem;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    height: 10rem;
    padding: 0.5rem 2rem;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme.maxWidth}) {
    height: 70rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 7rem;
  }

  h2 {
    font-family: monospace;
    color: ${props => props.theme.brown};
  }

  h2:last-child {
    color: ${props => props.theme.black};
  }
`;

export { NavStyles, Logo };
