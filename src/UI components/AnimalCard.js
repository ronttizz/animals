import classes from "./AnimalCard.module.css";
import Button from "./Button";

function AnimalCard() {
  return (
    <div className={classes.animalCard}>
      <img src="#" alt="#"></img>
      <h2>AnimalName</h2>
      <div className={classes.bottom}>
        <p>❤️</p>
        <Button />
      </div>
    </div>
  );
}

export default AnimalCard;
