import classes from "./Button.module.css";

const HomeButton = ({ children, onClick }) => {
  return (
    <button
      className={[
        classes.btn,
        classes.lg,
        classes.white
      ].join(' ')}
      onClick={ onClick }
    >
      { children }
    </button>
  )
}

export default HomeButton;
