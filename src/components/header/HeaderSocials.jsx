import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sajalshri/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/sazzisgithub" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=919754410817"
        target="_blank"
      >
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
