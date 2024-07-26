import classes from "./Badge.module.css";

const PlusBadge = () => {
  return (
    <div className={ `${classes.badge} ${classes.plus} ${classes.badge__yellow} ${classes.sm}` }></div>
  )
}

export default PlusBadge;
