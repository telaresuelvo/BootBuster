import React from 'react';


class Go extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div style={{ marginLeft: 130 }}>
        <button className="btn btn-lg btn-success" disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>
      </div>

    );
  }
}
console.log('exist')
export default Go;
