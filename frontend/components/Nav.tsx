import Link from "next/link";
import Hamburger from "../static/hamburger.svg";
import { NavStyles, Logo } from "./styles/NavStyles";
import SliderStyles from "./styles/SliderStyles";
import useToggle from "../hooks/useToggle";

const Nav = () => {
  const { open, handleToggle } = useToggle();
  return (
    <NavStyles>
      <div className="container">
        <Logo>
          <img src="../static/bas.png" alt="bas logo" />
          <img src="../static/milo.png" alt="milo logo" />
          <h2>{"BA"}</h2>
          <h2>{"ILO"}</h2>
        </Logo>
      </div>

      {/*<div className="hamburger" onClick={handleToggle}>
        <img src={Hamburger} alt="hamburger menu" />
      </div>
      <div className="inline-menu">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/shopping">
          <a>Shopping</a>
        </Link>
        <Link href="/adoption">
          <a>Adoption</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>*/}
    </NavStyles>
  );
};

export default Nav;
