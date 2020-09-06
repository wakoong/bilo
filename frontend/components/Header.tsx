import styled from "styled-components";

const Logo = styled.div`
  :hover {
    opacity: 0.7;
  }
`;

const StyledHeader = styled.header`
  img {
    height: 10rem;
    width: 10rem;
  }
  .bar {
    background: ${props => props.theme.brown};
    border-bottom: 2px solid ${props => props.theme.white};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    height: 10rem;

    @media (max-width: ${props => props.theme.maxWidth}) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
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
      </div>
      <div className="sub-bar">subbar</div>
    </StyledHeader>
  );
};

export default Header;
