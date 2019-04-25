import React from "react";
import TimerInput from "./TimerInput.jsx";
import Go from "./Go.jsx";
import Timer from "./Timer.jsx";
import { Link, Route } from "react-router-dom";
import SecondView from "./SecondView.jsx";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      value: "",
      isClicked: false
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
  }

  render() {
    const clicked = this.state.isClicked;
    let clockTrans = this.state.value;
    console.log("first", clockTrans, "");
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Timer value={this.state.value} seconds={this.state.seconds} />
            <Link
              to={{
                pathname: "/SecondView",
                state: {
                  sec: this.state.seconds,
                  trans: clockTrans,
                  clicked: this.state.isClicked
                }
              }}
            >
              <Go className="start" startCountDown={this.startCountDown} />
            </Link>

            <TimerInput
              value={this.state.value}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
