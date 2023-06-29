import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <a target="_blank" href="https://www.linkedin.com/in/nandhini-kumar-073b82212/" ><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default Footer;