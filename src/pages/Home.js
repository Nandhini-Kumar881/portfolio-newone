import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi , I'm Nandhini Kumar</h2>
        <div className="prompt">
          <p>An Innovative <strong>Front-End developer</strong> with a passion for learning and creating.</p>
          <button className="AboutMebtn"><a className="AboutMeLink" href="#AboutMe">ABOUT ME</a></button><br></br>
          <a target="_blank" href="https://www.linkedin.com/in/nandhini-kumar-073b82212/" ><LinkedInIcon /></a>
          <a target="_blank" href="https://github.com/Nandhini-Kumar881" ><GithubIcon /></a>
          <a target="_blank" href="mailto:nandhunandhini881@gmail.com" ><EmailIcon /></a>

        </div>
      </div>
      <AboutMe />
    </div>
  );
}

export default Home;