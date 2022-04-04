import React, { Component } from "react";

import classes from "./App.module.css";
import AnimalCard from "./UI components/AnimalCard";
import { animals } from "./animals.js";

class App extends Component {
  state = {
    animals,
  };

  addLikeHandler = (name) => {};

  render() {
    const animalList = this.state.animals.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          animalName={animal.name}
          animalLikes={animal.likes}
          action={() => this.addLikeHandler(animal.name)}
        />
      );
    });
    return <div className={classes.AnimalCardContainer}>{animalList}</div>;
  }
}

export default App;
