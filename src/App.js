import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Projects/Task";
import ProjectsIndex from "./components/ProjectsIndex";

import "./App.css";
import "./styles/project.css";
import Overview from "./pages/Projects/Overview";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="app_wrapper">
          <ProjectsIndex />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project/task" element={<Task data={"Task"} />} />
            <Route
              path="/project/overview"
              element={<Overview data={"Task"} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
