import { PropTypes } from "prop-types";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import classes from "./TodoItem.module.css";
import { updateTodo, deleteTodo } from "src/store/todos/todoActions";
import { DotsIcon, DeleteModal } from "src/components";

const TodoItem = ({ todo }) => {
  const [ isCompleted, setCompleted ] = useState(todo.completed);
  const [ modalOpen, setModalOpen ] = useState(false);

  const modal = useRef(null);

  const dispatch = useDispatch();

  const completeTask = (e) => {
    e.preventDefault();
    setCompleted(!isCompleted);
    dispatch(
      updateTodo(
        {
          todoId: todo._id,
          title: todo.title,
          completed: !isCompleted
        }
      )
    );
  };

  const handleClick = () => {
    setModalOpen(true);
  }

  const closeModal = (e) => {
    if (modalOpen && !modal.current?.contains(e.target)) {
      setModalOpen(false);
    }
  }

  const deleteItem = () => {
    dispatch(deleteTodo({ todoId: todo._id }));
    setModalOpen(false);
  }

  document.addEventListener('mousedown', closeModal);

  return (
    <>
      { modalOpen && <div className={ classes.modal__backdrop }></div> }
      <li className={ classes.todo__card }>
        <div className={ classes.round }>
          <input
            type="checkbox"
            checked={ isCompleted }
            id={ todo._id }
            readOnly
            onClick={ (e) => completeTask(e) }
          />
          <label htmlFor={ todo._id }></label>
        </div>
        <p>{ todo.title }</p>
        <div className='position-relative'>
          <DotsIcon onClick={handleClick}></DotsIcon>
          { modalOpen && <DeleteModal onClick={ deleteItem } innerRef={ modal } /> }
        </div>

      </li>
    </>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.any
}

export default TodoItem;
