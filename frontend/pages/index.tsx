import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const USERS = gql`
  query {
    users {
      username
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log({ data });
  return (
    <React.Fragment>
      <Header />
      <HeroSection>{"first section"}</HeroSection>
    </React.Fragment>
  );
};

export default Home;
