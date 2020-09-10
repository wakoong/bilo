import Link from "next/link";
// import Hamburger from "../static/hamburger.svg";
import { NavStyles, Logo, Menu } from "./styles/NavStyles";
import { NavData } from "../lib/data";
import useToggle from "../hooks/useToggle";

const Nav = () => {
  const { open, handleToggle } = useToggle();

  return (
    <NavStyles>
      <div className="container">
        <Link href="/">
          <a>
            <Logo>
              <img src="../static/bas.png" alt="bas logo" />
              <img src="../static/milo.png" alt="milo logo" />
              <h2>{"BA"}</h2>
              <h2>{"ILO"}</h2>
            </Logo>
          </a>
        </Link>
        <Menu>
          {NavData.map(data => (
            <li key={data.id}>
              <Link href={data.path} as={data.path}>
                {data.name}
              </Link>
            </li>
          ))}
        </Menu>
      </div>
    </NavStyles>
  );
};

export default Nav;
