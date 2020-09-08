import styled from "styled-components";
import HeaderStyles from "./styles/HeaderStyles";
import Nav from "./Nav";
import useToggle from "../hooks/useToggle";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="text-container">
        <h1>
          <span>{"바스"}</span>
          {" & "}
          <span>{"마일로"}</span>
        </h1>
        <p>{"각각 미국과 한국에서 입양된 강아지 '형제의' 이야기"}</p>
      </div>
      <div className="img-container">
        <img src="../static/main.png" alt="main image" />
      </div>
    </HeaderStyles>
  );
};

export default Header;
