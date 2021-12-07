import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  // constructor(props) {
  //   console.log('call constructor');
  //   super(props);

  //   this.state = { lat: null, errorMessage: '' };
  // }

  // Is the same as put in constructor
  state = { lat: null, errorMessage: '' };
  

  componentDidMount() {
    console.log('call componentDidMount');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );  
  }

  render() {
    console.log('call render');
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
