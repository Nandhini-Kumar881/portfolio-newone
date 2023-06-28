import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi,I am Nandhini Kumar</h2>
        <div className="prompt">
          <p>An Innovative <strong>Front-End developer</strong> with a passion for learning and creating.</p>
          <a target="_blank" href="https://www.linkedin.com/in/nandhini-kumar-073b82212/" ><LinkedInIcon /></a>
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> LANGUAGES KNOWN</h1>
        <ol className="list">
          <li className="item">
            <h2> English</h2>
            {/* <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span> */}
          </li>
          <li className="item">
            <h2> Tamil</h2>
            {/* <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span> */}
          </li>
          <li className="item">
            <h2> Malayalam</h2>
            {/* <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span> */}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;