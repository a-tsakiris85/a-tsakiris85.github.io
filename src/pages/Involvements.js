import React from "react";
import ProjectItem from "../components/ProjectItem";
import { tourGuide, odyssey, thetaTau } from "../InvolvementInfo";

export default class Involvements extends React.Component {
  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">INVOLVEMENT</h1>
        <ProjectItem item={tourGuide} />
        <ProjectItem item={odyssey} />
        <ProjectItem item={thetaTau} />
      </div>
    );
  }
}

/*
- TT Philanthropy Chair
- Tour Guide
- Teaching assistant...?
*/
