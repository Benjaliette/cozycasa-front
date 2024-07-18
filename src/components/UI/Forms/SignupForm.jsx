import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import FormInput from "./Input/FormInput";
import { Button } from "src/components";
import { signupUser } from "src/store/users/userActions";
import { clearError } from "src/store/users/userSlice";
import classes from './Forms.module.css';
import { ClipLoader } from "react-spinners";

const SignupForm = () => {
  const { loading, signupSuccess, error } = useSelector(
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
    if (signupSuccess) navigate('/login');
  }, [navigate, signupSuccess, dispatch])

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch')
    }

    data.identifier = data.email.toLowerCase();
    dispatch(signupUser(data));
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(submitForm)} className={classes.form}>
        <FormInput type="text" id="username" placeholder="Nom d'utilisateur" register={ register } isError={ error != null }></FormInput>
        <FormInput type="email" id="email" placeholder="Email" register={ register } isError={ error != null }></FormInput>
        <FormInput type="password" id="password" placeholder="Mot de passe" register={ register } isError={ error != null }></FormInput>
        <FormInput type="password" id="confirmPassword" placeholder="Répéter le mot de passe" register={ register } isError={ error != null }></FormInput>
        { loading ? <ClipLoader
          color={"#3B857B"}
          cssOverride={ override }
        /> :
        <Button size="sm" color="green" type="submit">Suivant</Button> }
        <span className={ classes.error }>
          { error ? error : ""}
        </span>
      </form>
    </>
  )
}

export default SignupForm;
