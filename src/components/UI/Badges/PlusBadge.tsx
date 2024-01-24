import classes from "styles/components/UI/badge.module.scss";

interface MyBadgeProps {
  color: "primary" | "secondary",
  size: "lg" | "sm"
}

const PlusBadge = ({ color, size }: MyBadgeProps) => {
  return (
    <span className={`${classes.badge} ${classes[`badge__${size}`]} ${classes[`badge__${color}`]}`}>
      +
    </span>
  );
}

export default PlusBadge;
