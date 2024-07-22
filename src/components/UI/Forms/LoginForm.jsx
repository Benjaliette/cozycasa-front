import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import FormInput from "./Input/FormInput";
import { Button } from "src/components";
import { loginUser } from "src/store/users/userActions";
import { getTodos } from "src/store/todos/todoActions";
import { clearError } from "src/store/users/userSlice";
import classes from './Forms.module.css';
import { ClipLoader } from "react-spinners";

const LoginForm = () => {
  const { loading, loginSuccess, error, accessToken } = useSelector(
    (state) => state.user
  )

  const override = {
    display: "block",
    margin: "0 auto",
  };

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearError());
    if (loginSuccess) {
      dispatch(getTodos(accessToken));
      navigate('/users/todos');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginSuccess])

  const submitForm = (data) => {
    data.identifier = data.email.toLowerCase();
    dispatch(loginUser(data));
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(submitForm)} className={classes.form}>
        <FormInput type="email" id="email" placeholder="Email" register={ register } isError={ error != null }></FormInput>
        <FormInput type="password" id="password" placeholder="Mot de passe" register={ register } isError={ error != null }></FormInput>
        { loading ? <ClipLoader
          color={"#3B857B"}
          cssOverride={ override }
        /> :
        <Button href="/login" size="sm" color="green" type="submit">Suivant</Button> }
        <span className={ classes.error }>
          { error ? error : ""}
        </span>
      </form>
    </>
  )
}

export default LoginForm;
