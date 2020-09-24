import * as React from "react";
import Link from "next/link";
import styled from "styled-components";

import HeroSection from "../../components/HeroSection";
import ItemPreviewCard from "../../components/ItemPreviewCard";
import SubHeader from "../../components/SubHeader";

const Main = styled.section`
  display: grid;
  grid-template-rows: 7em 1fr;
`;

const ItemPreviewContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 1em 1em;

  @media (min-width: ${(props) => props.theme.midWidth}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Shop = () => {
  return (
    <Main>
      <SubHeader subtitle="Men" title="Men's Shoes" />
      <ItemPreviewContainer>
        <Link href="/shop/collar">
          <a>
            <ItemPreviewCard
              title="목걸이"
              subtitle="강아지"
              imagePath={"../static/bas.png"}
            />
          </a>
        </Link>
        <Link href="/shop/2">
          <a>
            <ItemPreviewCard
              title="목걸이"
              subtitle="강아지"
              imagePath={"../static/bas.png"}
            />
          </a>
        </Link>{" "}
        <Link href="/shop/3">
          <a>
            <ItemPreviewCard
              title="목걸이"
              subtitle="강아지"
              imagePath={"../static/bas.png"}
            />
          </a>
        </Link>{" "}
        <Link href="/shop/4">
          <a>
            <ItemPreviewCard
              title="목걸이"
              subtitle="강아지"
              imagePath={"../static/bas.png"}
            />
          </a>
        </Link>{" "}
        <Link href="/shop/5">
          <a>
            <ItemPreviewCard
              title="목걸이"
              subtitle="강아지"
              imagePath={"../static/bas.png"}
            />
          </a>
        </Link>
      </ItemPreviewContainer>
    </Main>
  );
};

export default Shop;
