import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "../styles/project.css";

const ProjectsIndex = () => {
  return (
    <>
      <div className="bg-light">
        <NavLink className="project-menu" to={"/project/overview"}>
          Overview
        </NavLink>
        <NavLink className="project-menu" to={"/project/task"}>
          Task
        </NavLink>
        <NavLink className="project-menu">Files</NavLink>
      </div>
    </>
  );
};

export default ProjectsIndex;
