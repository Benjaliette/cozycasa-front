import { Button } from "src/components";
import { logoutUser } from "src/store/users/userActions";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Show = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();

  const { loginSuccess } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!loginSuccess) navigate('/');
  }, [loginSuccess, navigate])

  const submitLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <>
      <h1>User page</h1>
      <form action="" onSubmit={handleSubmit(submitLogout)}>
        <Button size="sm" color="green" type="submit">Logout</Button>
      </form>
    </>
  )
}

export default Show;
