import styled from "styled-components";

const HeaderStyles = styled.header`
  position: relative;
  padding-top: 8rem;
  padding-bottom: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  .img-container {
    img {
      height: 100%;
      width: 100%;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
    span {
      font-size: 4.8rem;
    }

    span:first-child {
      color: ${props => props.theme.brown};
    }
    span:last-child {
      color: ${props => props.theme.black};
    }
  }

  @media (min-width: ${props => props.theme.midWidth}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    .img-container {
      order: -1;
    }
  }
`;

export default HeaderStyles;
