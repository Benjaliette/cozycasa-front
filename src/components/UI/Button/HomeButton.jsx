import classes from "./Button.module.css";

const HomeButton = ({ children }) => {
  return (
    <button className={[
      classes.btn,
      classes.lg,
      classes.white
    ].join(' ')}>
      { children }
    </button>
  )
}

export default HomeButton;
