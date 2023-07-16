import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a target="_blank" href="https://instagram.com/_crazy_edition_?igshid=MzNlNGNkZWQ4Mg=="><InstagramIcon /></a>
        <a target="_blank" href="https://www.facebook.com/nandhini.kumar.967?mibextid=ZbWKwL"><FacebookIcon /></a>
        <a target="_blank" href="https://www.linkedin.com/in/nandhini-kumar-073b82212/" ><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default Footer;