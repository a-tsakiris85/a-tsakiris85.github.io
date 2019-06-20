import React from "react";
import ContentRow from "../components/ContentRow";

import {
  CORNELL_DESC,
  AB_DESC,
  CONANT_DESC,
  PL_DESC,
  ML_DESC,
  TEACHING_DESC
} from "./AboutText";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="Page" style={{ paddingTop: "2em" }}>
        <ContentRow
          overallTitle="Places I've Studied"
          img1="../images/profile.gif"
          title1="Cornell University"
          desc1={CORNELL_DESC}
          desc2={AB_DESC}
          desc3={CONANT_DESC}
          title2="Acton Boxborough HS"
          title3="Luther Conant Elementary"
        />
        <ContentRow
          overallTitle="Skills I Have"
          img1="../images/profile.gif"
          title1="Programming Languages"
          desc1={PL_DESC}
          desc2={ML_DESC}
          title2="ML + AI Concepts"
          title3="Teaching + Public Speaking"
          desc3={TEACHING_DESC}
        />
        <ContentRow
          overallTitle="Things I Do"
          img1="../images/profile.gif"
          title1="Sports + Exercise"
          desc1="This is just a simple testThis is just a simple testThis is just a simple testThis is just a simple testThis is just a simple test"
          title2="Learn New Things"
          title3="Have Fun!"
        />
      </div>
    );
  }
}
