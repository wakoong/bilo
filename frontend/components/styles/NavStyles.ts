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
    justify-content: space-between;
    height: 10rem;
    padding: 0.5rem 2rem;
    margin: 0 auto;
    z-index: 2;
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

const Menu = styled.ul`
  display: flex;
  align-items: center;
  width: auto;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    padding: 0 1rem;
    cursor: pointer;

    @media (min-width: ${props => props.theme.midWidth}) {
      padding: 0 3rem;
    }
  }

  a {
    font-family: monospace;
    color: ${props => props.theme.black};
    font-weight: bold;
  }

  a:hover,
  a:focus {
    color: ${props => props.theme.brown};
  }
`;

export { NavStyles, Logo, Menu };
