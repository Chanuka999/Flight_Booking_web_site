//import React from "react";

import logo from "../../assets/logo.jfif";

import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" />
          </div>

          <p>Your mind shoud be stronger than your feeling,fly</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <div className="linkTitle">Information</div>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check in</a>
          </li>
          <li>
            <a href="">manege ypur Booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <div className="linkTitle">Quick Guide</div>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <div className="linkTitle">Information</div>
          <li>
            <a href="">Chauffuor</a>
          </li>
          <li>
            <a href="">Our partners</a>
          </li>
          <li>
            <a href="">Detination</a>
          </li>
          <li>
            <a href="">carrers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programm tools</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          CourTesy Design | Download by{" "}
          <a href="" target="_blank">
            jackerd
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
