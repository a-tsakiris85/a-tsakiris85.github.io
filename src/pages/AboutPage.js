import React from "react";
import ContentRow from "../components/ContentRow";

import {
  CORNELL_DESC,
  AB_DESC,
  CONANT_DESC,
  PL_DESC,
  ML_DESC,
  TEACHING_DESC,
  FUN_DESC,
  SPORTS_DESC,
  LEARNING_DESC
} from "../AboutText";

import cornellImg from "../images/cornell.png";
import conantImg from "../images/conant.gif";
import actonImg from "../images/acton.png";
import plImg from "../images/programming.png";
import mlImg from "../images/ai.png";
import speechImg from "../images/speaking.png";
import gameImg from "../images/game.png";
import dumbellImg from "../images/sports.png";
import bulbImg from "../images/learning.png";

import "./AboutPage.css";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">ABOUT</h1>
        <ContentRow
          overallTitle="Places I've Studied"
          img1={cornellImg}
          title1="Cornell University"
          desc1={CORNELL_DESC}
          desc2={AB_DESC}
          img2={actonImg}
          desc3={CONANT_DESC}
          title2="Acton Boxborough HS"
          title3="Luther Conant Elementary"
          img3={conantImg}
        />
        <ContentRow
          overallTitle="Skills I Have"
          img1={plImg}
          img2={mlImg}
          img3={speechImg}
          title1="Programming Languages"
          desc1={PL_DESC}
          desc2={ML_DESC}
          title2="ML + AI Concepts"
          title3="Teaching + Public Speaking"
          desc3={TEACHING_DESC}
        />
        <ContentRow
          overallTitle="Things I Do"
          img1={dumbellImg}
          img2={bulbImg}
          img3={gameImg}
          title1="Sports + Exercise"
          desc1={SPORTS_DESC}
          title2="Learn New Things"
          desc2={LEARNING_DESC}
          title3="Have Fun!"
          desc3={FUN_DESC}
        />
      </div>
    );
  }
}
