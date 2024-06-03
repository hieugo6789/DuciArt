import { Link } from "react-router-dom";

import logo from "../assets/images/Logo_preview_rev_1.png";
import Slider from "./Slider";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "40%" }}
          />
        </Link>
      </h1>
      <nav>
        <Slider />
        <ul className="menu">
          <li>
            <Link
              to="/"
              className="clr-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="clr-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className="clr-3"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="clr-4"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="clr-5"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
