import React from "react";
import ReactDom from "react-dom";
import Seasons from './Season';

export default class App extends React.Component {
  
state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

  //   componentDidUpdate(){
  //       console.log('component updated - rerendered')
  //   }
  render() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    if (!this.state.errMsg && this.state.lat) {
      return (
        <div className="season-wrapper"><Seasons lat={this.state.lat}/></div>
      
      )
    }
    return <div>Please wait, latitude is loading!</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
