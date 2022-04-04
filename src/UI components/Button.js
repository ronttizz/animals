import classes from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button className={classes.button} onClick={props.click}>
        Add like
      </button>
    </div>
  );
}

export default Button;
