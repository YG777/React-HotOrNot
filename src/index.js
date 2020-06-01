import React from "react";
import ReactDom from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }
  render() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    if (!this.state.errMsg && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Please wait, latitude is loading!</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
