import styled from "styled-components";

const ItemPreviewCardStyles = styled.article`
  display: grid;
  grid-template-rows: 1fr 5em;
  cursor: pointer;

  .image-container {
    max-height: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .description-container {
    padding: 0.5em 0.3em;
    font-family: monospace;
    line-height: 1.5;

    .title {
      font-size: 1em;
      font-weight: 900;
    }

    .subtitle {
      font-size: 0.8em;
    }
  }

  &:hover {
    border: 1px solid black;
  }
`;

export default ItemPreviewCardStyles;
