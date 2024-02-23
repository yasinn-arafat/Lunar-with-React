import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footerWraper">
            <div className="footer__left">
              <picture>
                <img
                  src="../src/assets/FooterLogo.png"
                  alt="../src/assets/FooterLogo.png"
                />
              </picture>
              <p className="footer__details">
                REBORN STUDIO AB Org.nr: 559264-1871 Lunar Holding LDA
                info@lunarstrategy.com +467-20478390
              </p>
              <div className="footer__icons">
                <a href="#" className="social__icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="social__icon">
                  <FaTwitter />
                </a>
                <a href="#" className="social__icon">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social__icon">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="footer__services">
              <h4 className="services__title">Company</h4>
              <ul className="services__list">
                <li className="services__item">
                  <a href="#">Home</a>
                  <a href="#">About Us</a>
                  <a href="#">Lunar Blog</a>
                  <a href="#">Our Specialists</a>
                  <a href="#">Contact Us</a>
                  <a href="#">Privacy & Policy</a>
                </li>
              </ul>
            </div>

            <div className="footer__services">
              <h4 className="services__title">Services</h4>
              <ul className="services__list">
                <li className="services__item">
                  <a href="">Digital Marketing</a>
                  <a href="">Free Audit</a>
                  <a href="">Google Ads</a>
                  <a href="">Cryptocurrency Marketing</a>
                  <a href="">SEO </a>
                  <a href="">SAAS Marketing</a>
                  <a href="">Website & SEO</a>
                </li>
              </ul>
            </div>

            <div className="footer__right">
              <h4 className="services__title">Podcast</h4>
              <div className="box__img"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
