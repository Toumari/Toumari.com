import { Link } from "react-router-dom";
import "./TopNav.css";
export default function TopNav() {
  return (
    <div className="top-nav">
      <div className="top-nav__logo">
        <Link to="/">
          <h1 className="top-nav__logo">Toumari.com</h1>
        </Link>
      </div>
      <div className="top-nav__links">
        <Link className="top-nav__link" to={"/"}>
          Home
        </Link>
        <Link className="top-nav__link" to={"/portfolio"}>
          Portfolio
        </Link>
        <Link className="top-nav__link" to={"/about"}>
          About Me
        </Link>
        <Link className="top-nav__link" to={"/contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
}
