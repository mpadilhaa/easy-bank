import React from "react";
import "./Footer.css";
import LOGO from "../../assets/logo.svg";
import FACEBOOK from "../../assets/icon-facebook.svg";
import YOUTUBE from "../../assets/icon-youtube.svg";
import TWITTER from "../../assets/icon-twitter.svg";
import PINTREST from "../../assets/icon-pinterest.svg";
import INSTAGRAM from "../../assets/icon-instagram.svg";
import Button from "../Button";

const data = [
  {
    id: 1,
    img: FACEBOOK,
    alt: "facebook",
  },
  {
    id: 2,
    img: YOUTUBE,
    alt: "youtube",
  },
  {
    id: 3,
    img: TWITTER,
    alt: "twitter",
  },
  {
    id: 4,
    img: PINTREST,
    alt: "pintrest",
  },
  {
    id: 5,
    img: INSTAGRAM,
    alt: "instagram",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo-and-socials">
          <img src={LOGO} alt="logo da empresa" />
          <div className="socials">
            {data.map((item) => (
              <img key={item.id} src={item.img} alt={item.alt} />
            ))}
          </div>
          <div className="links">
            <div className="col-1">
              <span>About Us</span>
              <span>Contact</span>
              <span>Blog</span>
            </div>
            <div className="col-2">
              <span>Careers</span>
              <span>Support</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className="btn-footer">
          <Button>Request Invite</Button>
          <p> © Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
