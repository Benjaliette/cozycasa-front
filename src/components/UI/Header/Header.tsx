import classes from "styles/components/UI/header.module.scss";
import Avatar from "../Avatar/Avatar";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MyHeaderProps {
  children: React.ReactNode;
}

const headerVariants = {
  small: { height: "10vh" },
  normal: { height: "30vh" },
};

const titleVariants = {
  small: {
    top: "2rem",
    left: "20%",
    width: "60%",
  },
  normal: {
    top: "5rem",
    left: "35%",
    width: "30%",
  },
};

const Header = () => {
  const [isForm, setIsForm] = useState(false);

  const { user } = useSelector((state: any) => state.user);

  const pathName = usePathname();

  useEffect(() => {
    if (pathName.split("/").at(-1) === "new") {
      setIsForm(true);
    } else {
      setIsForm(false);
    }
  }, [pathName]);

  return (
    <motion.header
      className={classes.user__header}
      animate={isForm ? "small" : "normal"}
      variants={headerVariants}
    >
      <motion.div className={classes.user__header_title} variants={titleVariants}>
        {!isForm && <h2>Votre safe place</h2>}
        <h1>
          Maison de
          {" " + user.username}
        </h1>
      </motion.div>
      <Avatar variant={isForm}></Avatar>
    </motion.header>
  );
};

export default Header;
