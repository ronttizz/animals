import classes from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button className={classes.button} onClick={props.click}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
