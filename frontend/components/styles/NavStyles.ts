import styled from "styled-components";

const NavStyles = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-self: end;
  cursor: pointer;

  .inline-menu {
    display: none;
  }

  @media (min-width: ${props => props.theme.midWidth}) {
    .hamburger {
      display: none;
    }
    .inline-menu {
      display: flex;
    }
  }

  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;

    &:hover,
    &:focus {
      outline: none;
      opacity: 0.7;
    }
  }
`;

export default NavStyles;
