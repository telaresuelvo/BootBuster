import React from "react";
import { Link } from "react-router-dom";
import SecondView from "./SecondView.jsx";

class Go extends React.Component {
  render() {
    return (
      <div>
        <button className="btns" onClick={this.props.startCountDown}>
          Start
        </button>
      </div>
    );
  }
}
console.log("exist");
export default Go;
