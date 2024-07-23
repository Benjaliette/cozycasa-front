import { PropTypes } from "prop-types";

import classes from './Modals.module.css';
import { TrashIcon } from 'src/components';

const DeleteModal = ({ onClick, innerRef }) => {
  return (
    <div className={ classes.modal__delete }>
      <ul>
        <li onClick={ onClick } ref={ innerRef }>
          <TrashIcon />
          <p className='p-4'>Supprimer</p>
        </li>
      </ul>
    </div>
  )
}

DeleteModal.propTypes = {
  onClick: PropTypes.func,
  innerRef: PropTypes.any
}

export default DeleteModal;
