"use client";

import { FormInput, Button } from "components/UI";

import { UserKey, registerUser } from "store/users/userAction";
import classes from "styles/components/UI/form.module.scss";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { update } from "store/users/userSlice";
import { AppDispatch } from "store/store";

const Signup = () => {
  const { user, errors } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent) => {
    const fieldName = (e.currentTarget as HTMLTextAreaElement).name;
    const fieldValue = (e.currentTarget as HTMLTextAreaElement).value;

    const newUser = {
      ...user
    } ;

    newUser[fieldName] = fieldValue;

    dispatch(update(newUser));
  };

  const submitForm = async (e: any) => {
    e.preventDefault();

    dispatch(registerUser(user));
  };

  return (
    <>
      <h1>Créer un compte</h1>
      <form
        className={classes["form__global"]}
        onSubmit={submitForm}
        noValidate
      >
        <FormInput
          type="text"
          id="username"
          value={user.username}
          error={errors.username}
          onChange={handleChange}
        ></FormInput>
        <FormInput
          type="email"
          id="email"
          value={user.email}
          error={errors.email}
          onChange={handleChange}
        ></FormInput>
        <FormInput
          type="password"
          id="password"
          value={user.password}
          error={errors.password}
          onChange={handleChange}
        ></FormInput>
        <FormInput
          type="password"
          id="password2"
          value={user.password2}
          onChange={handleChange}
        ></FormInput>
        <Button size="sm" color="green" type="submit">
          Suivant
        </Button>
      </form>
      <p className="primary-para">
        Vous avez déjà un compte ?{" "}
        <Link href="/users/login">Identifiez vous</Link>
      </p>
    </>
  );
};

export default Signup;
