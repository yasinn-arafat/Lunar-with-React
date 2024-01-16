import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <div className="container">
            <div className="navWraper">
              <div className="navLogo">
                <picture>
                  <a href="#">
                    <img src={logo} alt={logo} />
                  </a>
                </picture>
              </div>
              <div className="navMenu">
                <ul className="menuList">
                  <li className="menu__item">
                    <a href="#">Services</a>
                  </li>
                  <li className="menu__item">
                    <a href="#">Industries</a>
                  </li>
                  <li className="menu__item">
                    <a href="#">About Us</a>
                  </li>
                  <li className="menu__item">
                    <a href="#">Team Lunar</a>
                  </li>
                  <li className="menu__item blog--icon">
                    <a href="#">Blog</a>
                    <MdKeyboardArrowDown className="down--arrow" />
                  </li>
                </ul>

                <button className="menu__btn">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
