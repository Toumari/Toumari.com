import "./SideMenu.css";
import { Link } from "react-router-dom";

export default function SideMenu(props) {
  let sideMenuClass = props.sideMenuOpen
    ? "side-menu side-menu__open"
    : "side-menu side-menu__close";

  const closeSideMenu = (e) => {
    props.setSideMenuOpen(false);
    props.setHamburgerActive(false);
    sideMenuClass = "side-menu side-menu__close";
  };

  return (
    <div className={sideMenuClass}>
      <Link onClick={closeSideMenu} className="side-menu__item" to={"/"}>
        Home
      </Link>
      <Link
        onClick={closeSideMenu}
        className="side-menu__item"
        to={"/portfolio"}
      >
        Portfolio
      </Link>
      <Link onClick={closeSideMenu} className="side-menu__item" to={"/about"}>
        About
      </Link>
      {/* <Link onClick={closeSideMenu} className="side-menu__item" to={"/contact"}>
        Contact
      </Link> */}
    </div>
  );
}
