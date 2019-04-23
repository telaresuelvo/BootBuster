import React from "react";

class TimerInput extends React.Component {
  render() {
    return (
      <div>
        <input
          placeholder="Input Time"
          type="number"
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}

export default TimerInput;
