import { PropTypes } from "prop-types";

import classes from "./HomeItem.module.css";
import { Avatar } from "src/components";

const HomeMember = ({ member }) => {
  const avatar2 = 'main_avatar.svg';

  return (
    <li className={ classes.home__member }>
      <Avatar
        src={`/src/assets/avatars/${avatar2}`}
        alt="avatar utilisateur cartoon"
        size="xs"
      />
      <p className="italic text-xs">{ member.username }</p>
    </li>
  )
}

HomeMember.propTypes = {
  member: PropTypes.any
}

export default HomeMember;
