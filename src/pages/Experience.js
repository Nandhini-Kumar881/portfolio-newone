import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            PKD Matriculation Higher Secondary School
          </h3>
          <p>90.3%</p>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            PSG College Of Arts And Science
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>73.4%</p>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Programmer Trainee - Cognizant Technogy Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore
          </h4>
          <p>Learned MERN Stack Development and applied those technologies to develop a Flower boutique e-commerce website.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Programmer Analyst - Cognizant Technogy Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore
          </h4>
          <p>
            Worked in WALGREENS FINDCARE Immunization Project as a Front-End developer 
            and effectively translated client requirements into application designs and system requirements.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           System Engineer - Tata Consultancy Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore
          </h4>
          <p>
            Worked in GENUINE PARTS COMPANY Project to implement front-end
             components with progressive Vue.js framework
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;