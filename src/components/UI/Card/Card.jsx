import { PropTypes } from "prop-types";
import classes from "./Card.module.css";

import { Avatar, HomeMember } from "src/components";

const Card = ({ home, onClick }) => {
  const avatar = 'spring.svg';

  const memberComponents = home.users.map((member) => {
    return <HomeMember key={ member._id } member={ member }></HomeMember>
  })

  return (
    <div className={ classes.home__card } onClick={ onClick }>
      <div className={ classes.card__header }>
        <Avatar
          src={`/src/assets/home_avatars/${avatar}`}
          alt="avatar maison cartoon"
          size="sm"
        />
        <h2>{ home.name }</h2>
      </div>
      <h3>Members</h3>
      <ul className={ classes.home__card_members }>
        { memberComponents }
      </ul>
    </div>
  )
}

Card.propTypes = {
  home: PropTypes.any,
  onClick: PropTypes.func
}

export default Card;
