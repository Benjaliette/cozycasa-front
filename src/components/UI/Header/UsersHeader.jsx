import { PropTypes } from "prop-types";

import { Avatar } from "src/components";
import classes from "./Header.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const UsersHeader = ({ username }) => {
  const avatar = 'main_avatar.svg';

  const { scrollYProgress } = useScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['0%', '-60%']
  )

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['0%', '120%']
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0],
  )

  return (
    <motion.header
      className={`${classes.header__user_page}` }
      style={{
        y: headerY,
      }}
    >
      <nav className="container mx-auto px-10 pt-20 text-center">
        <div>
          <motion.p
            className="mb-10"
            style={{
              opacity
            }}
          >
            Votre safe place
          </motion.p>
          <motion.h2 className={`${classes.header__user_title}` } style={{ y: titleY }}>
            Maison de { username }
          </motion.h2>
        </div>
        <Avatar
          src={`/src/assets/avatars/${avatar}`}
          alt="avatar utilisateur cartoon"
          size="lg"
          scrollValue={ scrollYProgress }
        />
      </nav>
    </motion.header>
  )
}

UsersHeader.propTypes = {
  username: PropTypes.string
}

export default UsersHeader;
