import React, { Component } from "react";
import classes from "./App.module.css";
import AnimalCard from "./UI components/AnimalCard";
import animals from "./animals.js";

class App extends Component {
  state = {
    animals,
  };
  render() {
    return (
      <div>
        <div className={classes.AnimalCardContainer}>
          <AnimalCard />
        </div>
      </div>
    );
  }
}

export default App;
