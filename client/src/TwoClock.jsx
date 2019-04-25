import React, { Component } from "react";
import TimerInput from "./TimerInput.jsx";
import Go from "./Go.jsx";
import Timer from "./Timer.jsx";
import { Link, Route } from "react-router-dom";

export default class TwoClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "",
      value: "",
      isClicked: false
    };

    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }
  /*
  componentDidMount() {
    console.log(this.props.parent)
    this.setState({
      seconds: this.props.parent.seconds,
      value: this.props.parent.value
    });
  }


  componentWillUnmount() {
    // Remove this to see warning.
    clearInterval(this.interval);
  }
  */

  handleChange(event) {
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
    this.setState({
      isClicked: true
    });
  }

  render() {
    console.log("seond clock", this.props);
    return (
      <div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <Timer value={this.state.value} seconds={this.state.seconds} />
          </div>
        </div>
      </div>
    );
  }
}
