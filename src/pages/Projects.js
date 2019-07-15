import React from "react";
import { temple, critter, baseball, website } from "../ProjectInfo";
import ProjectItem from "../components/ProjectItem";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">PROJECTS</h1>
        <ProjectItem item={temple} />
        <ProjectItem item={critter} />
        <ProjectItem item={baseball} />
        <ProjectItem item={website} />
      </div>
    );
  }
}

/*

-Temple
-Critter World
-Arcade Baseball
-This Website

Needs: Image, Title, Description. Link + Link Icon
*/
