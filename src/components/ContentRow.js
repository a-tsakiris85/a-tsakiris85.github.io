import React from "react";
import ContentItem from "./ContentItem";
import "./ContentRow.css";

export default class ContentRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1 id="ContentTitle">{this.props.overallTitle}</h1>
        <div id="ContentRow">
          <ContentItem
            img={this.props.img1}
            title={this.props.title1}
            desc={this.props.desc1}
            col={"1"}
          />
          <ContentItem
            img={this.props.img2}
            title={this.props.title2}
            desc={this.props.desc2}
            col={"2"}
          />
          <ContentItem
            img={this.props.img3}
            title={this.props.title3}
            desc={this.props.desc3}
            col={"3"}
          />
        </div>
      </>
    );
  }
}
