import styled from "styled-components";

const HeroSectionStyles = styled.section`
  background: ${props => (props ? props.color : "white")};

  .container {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);

    @media (min-width: ${props => props.theme.midWidth}) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
    }
  }
`;

export default HeroSectionStyles;
