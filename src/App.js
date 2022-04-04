import React, { Component } from "react";

import classes from "./App.module.css";
import AnimalCard from "./UI components/AnimalCard";
import { animals } from "./animals.js";

class App extends Component {
  state = {
    animals: animals,
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return { animals: updatedArray };
    });
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter((animal) => animal.name !== name);
    this.setState({
      animals: updatedArray,
    });
  };

  render() {
    const animalList = this.state.animals.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          animalName={animal.name}
          animalLikes={animal.likes}
          action={() => this.addLikeHandler(animal.name)}
          remove={() => this.removeHandler(animal.name)}
        />
      );
    });
    return (
      <div>
        <h1>Animals app</h1>
        <div className={classes.AnimalCardContainer}>{animalList}</div>
      </div>
    );
  }
}

export default App;
