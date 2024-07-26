import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { PropTypes } from "prop-types";
import classes from "./Card.module.css";
import { Avatar, HomeMember, DotsIcon, DeleteModal } from "src/components";
import { deleteHome } from "src/store/homes/homeActions";

const Card = ({ home, onClick }) => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const modal = useRef(null);
  const dispatch = useDispatch();

  const avatar = 'spring.svg';

  const memberComponents = home.users.map((member) => {
    return <HomeMember key={ member._id } member={ member }></HomeMember>
  })

  const handleClick = (event) => {
    event.stopPropagation();
    setModalOpen(true);
  }

  const deleteItem = (event) => {
    event.stopPropagation();
    dispatch(deleteHome({ homeId: home._id }));
    setModalOpen(false);
  }

  const closeModal = (e) => {
    if (modalOpen && !modal.current?.contains(e.target)) {
      setModalOpen(false);
    }
  }

  document.addEventListener('mousedown', closeModal);

  return (
    <>
      { modalOpen && <div className={ classes.modal__backdrop }></div> }
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
        <div className={ classes.home__card_action }>
          <DotsIcon onClick={ (event) => handleClick(event) } />
          { modalOpen && <DeleteModal onClick={ (event) => deleteItem(event) } innerRef={ modal } /> }
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  home: PropTypes.any,
  onClick: PropTypes.func
}

export default Card;
