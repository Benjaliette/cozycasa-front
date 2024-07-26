import { PropTypes } from "prop-types";

import { ArrowIcon } from "src/components";
import classes from "./Badge.module.css";

const ArrowBadge = ({ size, color }) => {
  return (
    <div className={[
      classes.badge,
      classes[color],
      classes[size],
      classes.arrow
    ].join(' ')}>
      <ArrowIcon />
    </div>
  )
}

ArrowBadge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default ArrowBadge;
