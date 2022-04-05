import React, { Component } from "react";

import classes from "./App.module.css";
import AnimalCard from "./UI components/AnimalCard";
import { animals } from "./animals.js";
import Button from "./UI components/Button";

class App extends Component {
  state = {
    animals: animals,
    search: "",
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

  searchHandler = (event) => {
    // console.log(event.target.value);
    this.setState({ search: event.target.value.toLowerCase() });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.toLocaleLowerCase().includes(this.state.search);
    });
    const animalList = animalFilter.map((animal) => {
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
        <h1 className={classes.header}>{this.state.animals.length} Animals app</h1>
        <div className={classes.searchBar}>
          <input
            type="text"
            className={classes.searchInput}
            id="search"
            onChange={this.searchHandler}
          />
        </div>
        <div className={classes.AnimalCardContainer}>{animalList}</div>
      </div>
    );
  }
}

export default App;
