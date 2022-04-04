import classes from "./AnimalCard.module.css";
import Button from "./Button";

function AnimalCard(props) {
  const capitalLetter = props.animalName.charAt(0).toUpperCase();
  const rest = props.animalName.slice(1);
  const name = capitalLetter + rest;
  return (
    <div className={classes.animalCard}>
      <img
        src={`https://source.unsplash.com/1600x900/?${props.animalName}`}
        alt={props.animalName}
        className={classes.image}
      ></img>
      <button className={classes.closeBtn} onClick={props.remove}>
        <small>X</small>
      </button>
      <h2 className={classes.animalName}>{name}</h2>
      <div className={classes.bottom}>
        <p>
          ❤️
          <span className={classes.likes}>{props.animalLikes}</span>
        </p>
        <Button click={props.action}>
          <p>Add like</p>
        </Button>
      </div>
    </div>
  );
}

export default AnimalCard;
