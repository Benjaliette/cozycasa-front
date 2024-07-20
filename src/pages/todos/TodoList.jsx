import { useDispatch, useSelector } from "react-redux";

import { refreshingToken } from "src/store/users/userActions";
import { getTodos } from 'src/store/todos/todoActions';
import { useEffect, useRef } from "react";

const TodoList = () => {
  const { userInfo, accessToken } = useSelector(
    (state) => state.user
  );

  const initialized = useRef(false);

  const { todos, error } = useSelector(
    (state) => state.todo
  )

  const dispatch = useDispatch();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      dispatch(getTodos(accessToken));

      if (error) {
        initialized.current = false;
        dispatch(refreshingToken({identifier: userInfo.email}));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken])

  return (
    <>
      <h1>Tâches restantes à faire</h1>
      <ul>
        { todos.map((todo, index) => <li key={index}>{ todo.title }</li>) }
      </ul>
    </>
  )
}

export default TodoList;
