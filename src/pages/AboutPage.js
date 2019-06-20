import React from "react";
import ContentRow from "../components/ContentRow";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="Page" style={{ paddingTop: "2em" }}>
        <ContentRow
          overallTitle="Places I've Studied"
          img1="../images/profile.gif"
          title1="This is just a simple test"
          desc1="This is just a simple testThis is just a simple testThis is just a simple testThis is just a simple testThis is just a simple test"
          desc2="much shorter"
        />
        <ContentRow
          overallTitle="Skills I Have"
          img1="../images/profile.gif"
          title1="This is just a simple test"
          desc1="This is just a simple testThis is just a simple testThis is just a simple testThis is just a simple testThis is just a simple test"
        />
        <ContentRow
          overallTitle="Things I Do"
          img1="../images/profile.gif"
          title1="This is just a simple test"
          desc1="This is just a simple testThis is just a simple testThis is just a simple testThis is just a simple testThis is just a simple test"
        />
      </div>
    );
  }
}
