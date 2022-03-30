import classes from "./App.module.css";
import AnimalCard from "./UI components/AnimalCard";
// import animals from "./animals.js";

function App() {
  // state = {
  //   animalsList: animals,
  // };
  return (
    <div>
      <div className={classes.AnimalCardContainer}>
        <AnimalCard />
      </div>
    </div>
  );
}

export default App;
