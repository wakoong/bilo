import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection>{"first section"}</HeroSection>
    </React.Fragment>
  );
};

export default Home;
