import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "./TypingTitle.css";

const PHRASES = [
  "Andrew Tsakiris",
  "a Proud Cornellian",
  "a Computer Scientist",
  "a Problem Solver"
];

const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 0
};

export default class TypingTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: true,
      textIndex: 0
    };
  }
  done = () => {
    this.setState(
      { typing: false, textIndex: (this.state.textIndex + 1) % 4 },
      () => this.setState({ typing: true })
    );
  };
  render() {
    let text = PHRASES[this.state.textIndex];
    return (
      <div id="completetyping">
        <div id="iamdiv" style={{ float: "left" }}>
          <h1 id="iam">I AM</h1>
        </div>
        {this.state.typing ? (
          <Typist
            style={{ float: "left", marginTop: "30px" }}
            onTypingDone={this.done}
            cursor={{ show: false }}
          >
            <h1 id="typingtext" style={{ marginTop: "0px" }}>
              {text}{" "}
            </h1>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={text.length - 1} />
          </Typist>
        ) : (
          <span>{}</span>
        )}{" "}
      </div>
    );
  }
}
