import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

import classes from "./Avatar.module.css";
import { useTransform } from "framer-motion";

const Avatar = ({ src, alt, scrollValue, size }) => {
  let sizeClass;

  switch (size) {
    case "lg":
      sizeClass = classes.avatar__lg
      break;
    case "sm":
      sizeClass = classes.avatar__sm
      break;
    case "xs":
      sizeClass = classes.avatar__xs
      break;
    default:
      break;
  }

  if (scrollValue) {
    let avatarX;
    let avatarY;

    if (scrollValue.current === 1) {
      avatarX = useTransform(
        scrollValue,
        [0, 0.25, 0.5],
        ['0%', '90%', '180%']
      )

      avatarY = useTransform(
        scrollValue,
        [0, 0.25, 0.5],
        ['0%', '-30%', '-60%']
      )
    } else {
      avatarX = useTransform(
        scrollValue,
        [1, 0, 0.25, 0.5],
        ['0%', '0%', '90%', '180%']
      )

      avatarY = useTransform(
        scrollValue,
        [1, 0, 0.25, 0.5],
        ['0%', '0%', '-30%', '-60%']
      )
    }

    return (
      <motion.img
        src={ src }
        alt={ alt }
        className={ `${classes.avatar} ${classes.avatar__moving} ${sizeClass}` }
        style={{
          x: avatarX,
          y: avatarY
        }}
      />
    )
  } else {
    return (
      <img
        src={ src }
        alt={ alt }
        className={ `${classes.avatar} ${sizeClass}` }
      />
    )

  }
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  scrollValue: PropTypes.any,
  size: PropTypes.string
}

export default Avatar;
