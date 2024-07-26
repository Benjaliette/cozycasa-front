import classes from './Badge.module.css';
import { PropTypes } from "prop-types";

const AddBadge = ({ onClick, position, color, size }) => {
  return (
    <div
      className={[
        classes.badge,
        classes[size],
        classes.plus,
        classes[color],
        position == 'botright' ? classes.badge__bottom_right : ''
      ].join(' ')}
      onClick={onClick}
    ></div>
  )
}

AddBadge.propTypes = {
  onClick: PropTypes.func,
  position: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default AddBadge;
