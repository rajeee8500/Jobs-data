import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div className="footer-content">
        <div className="footer-text">
          &copy; All Rights Reserved By Skill Safari @ 2024.
        </div>
        <div className="footer-icons">
          <Link to={"https://www.facebook.com"} target="_blank">
            <FaFacebookF />
          </Link>
          <Link to={"https://www.youtube.com"} target="_blank">
            <FaYoutube />
          </Link>
          <Link to={"https://www.linkedin.com"} target="_blank">
            <FaLinkedin />
          </Link>
          <Link to={"https://www.instagram.com"} target="_blank">
            <RiInstagramFill />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
