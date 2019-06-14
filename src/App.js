import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

const PHRASES = [
  "Andrew Tsakiris",
  "a cool guy",
  "your worst nightmare",
  "your mom"
];

const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 0
};
class App extends React.Component {
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
      <div>
        <div style={{ float: "left" }}>
          <h1 style={{ margin: "0 10px 0 0" }}>I am</h1>
        </div>
        {this.state.typing ? (
          <Typist
            style={{ float: "left" }}
            onTypingDone={this.done}
            cursor={{ show: false }}
          >
            <h1>{text} </h1>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={text.length - 1} />
          </Typist>
        ) : (
          <span>{}</span>
        )}
      </div>
    );
  }
}

export default App;
