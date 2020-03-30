import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { data: "" };
  jsonFile = "./data/info.json";

  componentDidMount() {
    // --- fetch from public - thats where index.html reside
    fetch(this.jsonFile)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        // Work with JSON data here
        console.log(data);
        this.setState({ data });
      })
      .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }

  render() {
    return (
      <div className="App">
        <p>Hello world !!!</p>
        <p>got from {this.jsonFile} : {JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
}

export default App;
