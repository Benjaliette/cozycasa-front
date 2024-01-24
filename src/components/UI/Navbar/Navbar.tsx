import { navbar } from "@nextui-org/react";

import classes from "styles/components/UI/navbar.module.scss";
import UserIcon from "../Icons/UserIcon";
import TaskIcon from "../Icons/TaskIcon";
import { CalendarIcon } from "../Icons/CalendarIcon";
import { NotesIcon } from "../Icons/NotesIcon";
import PlusBadge from "../Badges/PlusBadge";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__icon}>
        <TaskIcon color="black" />
        <CalendarIcon color="black" />
        <PlusBadge color="primary" size="lg" />
        <NotesIcon color="black" />
        <UserIcon color="black" />
      </div>
    </nav>
  );
};

export default Navbar;
