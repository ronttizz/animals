import classes from "./AnimalCard.module.css";
import Button from "./Button";

function AnimalCard(props) {
  return (
    <div className={classes.animalCard}>
      <img
        src="https://source.unsplash.com/1600x900/?cat"
        alt="Cat"
        className={classes.image}
      ></img>
      <h2 className={classes.animalName}>AnimalName</h2>
      <div className={classes.bottom}>
        <p>
          <span className={classes.likes}>0</span> ❤️
        </p>
        <Button />
      </div>
    </div>
  );
}

export default AnimalCard;
