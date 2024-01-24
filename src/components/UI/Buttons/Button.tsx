import classes from "styles/components/UI/button.module.scss";

import Link from "next/link";

interface MyButtonProps {
  children: React.ReactNode;
  type?: "submit" | "action";
  href?: string;
  size: "lg" | "sm";
  color: "green" | "white";
  onClick?: React.MouseEventHandler
}

const Button = ({ children, type, href, size, color, onClick }: MyButtonProps) => {
  const buttonSize = size === "lg" ? classes.lg : classes.sm;
  const buttonColor = color === "green" ? classes.green : classes.white;

  if (type === undefined && typeof href === "string") {
    return (
      <Link
        className={`${classes.btn} ${buttonSize} ${buttonColor}`}
        href={href}
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

export default Button;
