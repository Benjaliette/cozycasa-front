import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import FormInput from "./Input/FormInput";
import { Button } from "src/components";
import { loginUser } from "../../../store/users/userActions";
import classes from './Forms.module.css';
import { ClipLoader } from "react-spinners";

const LoginForm = () => {
  const { loading, success, error } = useSelector(
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
    if (success) navigate('/todos');
  }, [navigate, success])

  const submitForm = (data) => {
    data.identifier = data.email.toLowerCase();
    dispatch(loginUser(data));
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <FormInput type="email" placeholder="Email" register={ register } isError={ error != null }></FormInput>
        <FormInput type="password" placeholder="Mot de passe" register={ register } isError={ error != null }></FormInput>
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
