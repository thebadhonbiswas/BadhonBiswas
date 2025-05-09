import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <img src={logo} alt="navlogo" />
      {/*
      <div className="menubar">
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-icon"
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
        />
      </div>
     <div className={`menu ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      */}
    </nav>
  );
};

export default Nav;