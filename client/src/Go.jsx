import React from "react";
import { Link } from "react-router-dom";
import SecondView from "./SecondView.jsx";

class Go extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          className="btn btn-lg btn-success"
          onClick={this.props.startCountDown}
        >
          Start
        </button>
      </div>
    );
  }
}
console.log("exist");
export default Go;
