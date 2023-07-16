import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <img src={project.image} />
      <h1> {project.name}</h1>
      <p>
        <b>Applied Project:</b> {project.skills}
      </p>
    </div>
  );
}

export default ProjectDisplay;