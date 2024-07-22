import classes from './Badge.module.css';
import { PropTypes } from "prop-types";

const AddBadge = ({ onClick, position }) => {
  return (
    <div
      className={
        `${classes.badge} ${classes.badge__green} ${position == 'botright' ? classes.badge__bottom_right : ''}`
      }
      onClick={onClick}
    >
      +
    </div>
  )
}

AddBadge.propTypes = {
  onClick: PropTypes.func,
  position: PropTypes.string
};

export default AddBadge;
