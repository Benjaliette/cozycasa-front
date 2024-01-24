import Image from "next/image";

import avatarImg from "app/../../public/main_avatar.svg";
import classes from "styles/components/UI/avatar.module.scss";
import { motion } from "framer-motion";

const variants = {
  small: { left: "80%", top: "0.5rem" },
  normal: { left: undefined, top: undefined },
};

const Avatar = ({ variant }: any) => {
  const imageStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <motion.div
      className={classes.avatar}
      animate={variant ? "small" : "normal"}
      variants={variants}
    >
      <Image
        src={avatarImg}
        alt="two people looking at big messages screen"
        style={imageStyle}
        priority={true}
      />
    </motion.div>
  );
};

export default Avatar;
