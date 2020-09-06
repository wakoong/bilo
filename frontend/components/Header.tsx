import styled from "styled-components";
import Nav from "./Nav";
import useToggle from "../hooks/useToggle";

const Logo = styled.div`
  display: flex;
  align-items: stretch;
  height: 10rem;
  width: 20rem;
  img {
    height: 100%;
    width: 50%;
  }
  :hover {
    opacity: 0.7;
  }
`;

const StyledHeader = styled.header`
  .bar {
    background: ${props => props.theme.brown};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    height: auto;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <a href="">
            <img src="../static/bas.png" alt="bas" />
            <img src="../static/milo.png" alt="milo" />
          </a>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">subbar</div>
    </StyledHeader>
  );
};

export default Header;
