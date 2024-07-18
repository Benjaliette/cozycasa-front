import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button } from "src/components";
import { refreshingToken, logoutUser } from "src/store/users/userActions";
import { getTodos } from 'src/store/todos/todoActions';
// import { useEffect } from "react";

const TodoList = () => {
  const { userInfo, accessToken, refreshToken } = useSelector(
    (state) => state.user
  );

  const { todos, error } = useSelector(
    (state) => state.todo
  )

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  // useEffect(() => {
  //   console.log("get todos");
  //   dispatch(getTodos());
  // }, [])

  const submitLogout = () => {
    dispatch(logoutUser(refreshToken));
    navigate('/');
  }

  const submitTodos = () => {
    dispatch(getTodos(accessToken));

    if (error) {
      console.log(error);
      console.log(refreshToken);
      dispatch(refreshingToken(userInfo.email, refreshToken));
    }
  }

  return (
    <>
      <h1>Bienvenue dans la todo list</h1>
      <ul>
        { todos.map((todo, index) => <li key={index}>{ todo.title }</li>) }
      </ul>
      <form action="" onSubmit={handleSubmit(submitLogout)}>
        <Button size="sm" color="green" type="submit">Logout</Button>
      </form>
      <form action="" onSubmit={handleSubmit(submitTodos)}>
        <Button size="sm" color="green" type="submit">Force Todos</Button>
      </form>
    </>
  )
}

export default TodoList;
