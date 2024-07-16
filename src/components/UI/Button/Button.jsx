import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./Button.module.css";


const Button = ({ children, type, href, size, color, onClick }) => {
  const buttonSize = size === "lg" ? classes.lg : classes.sm;
  const buttonColor = color === "green" ? classes.green : classes.white;

  if (type === undefined && typeof href === "string") {
    return (
      <Link
        className={`${classes.btn} ${buttonSize} ${buttonColor}`}
        to={href}
      >
        {children}
      </Link>
    );
  } else if (type === "action") {
    return (
      <button className={`${classes.btn} ${buttonSize} ${buttonColor}`} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return (
      <button
        type={type}
        className={`${classes.btn} ${buttonSize} ${buttonColor}`}
      >
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
