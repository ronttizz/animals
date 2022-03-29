import classes from "./App.module.css";
import AnimalCard from "./UI components/AnimalCard";

function App() {
  return (
    <div>
      <div className={classes.AnimalCardContainer}>
        <AnimalCard />
      </div>
    </div>
  );
}

export default App;
