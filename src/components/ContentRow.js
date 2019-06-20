import React from "react";
import ContentItem from "./ContentItem";

export default class ContentRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "grid",
          marginLeft: "4%",
          gridAutoColumns: "30% 30% 30%",
          gridAutoRows: "3em auto",
          gridColumnGap: "2.5%",
          marginBottom: "1em"
        }}
      >
        <h1 style={{ gridRow: "1 / span 3" }}>{this.props.overallTitle}</h1>
        <ContentItem
          img={this.props.img1}
          title={this.props.title1}
          desc={this.props.desc1}
          col={"1"}
        />
        <ContentItem
          img={this.props.img1}
          title={this.props.title1}
          desc={this.props.desc2}
          col={"2"}
        />
        <ContentItem
          img={this.props.img1}
          title={this.props.title1}
          desc={this.props.desc1}
          col={"3"}
        />
      </div>
    );
  }
}
