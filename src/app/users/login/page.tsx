"use client"

import { UserKey, loginUser } from "store/users/userAction";
import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "styles/components/UI/form.module.scss";
import { Button, FormInput } from "components/UI";
import Link from "next/link";
import { update } from "store/users/userSlice";

import { AppDispatch } from "store/store";
import { redirect } from "next/navigation";

const Login = () => {
  const { user, errors, isLoggedIn } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (user.id !== "") {
      redirect(`/users/${user.id}`);
    }
  }, [user])

  const handleChange = (e: ChangeEvent) => {
    const fieldName = (e.currentTarget as HTMLTextAreaElement).name;
    const fieldValue = (e.currentTarget as HTMLTextAreaElement).value;

    const newUser: UserKey = {
      ...user,
    };

    newUser[fieldName] = fieldValue;

    dispatch(update(newUser));
  };

  const submitForm = async (e: any) => {
    e.preventDefault();

    await dispatch(loginUser(user));
  };

  return (
    <>
      <h1>Identification</h1>
      <form
        className={classes["form__global"]}
        onSubmit={submitForm}
        noValidate
      >
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
        <Button size="sm" color="green" type="submit">
          Suivant
        </Button>
      </form>
      <p className="primary-para">
        Vous n&apos;avez pas de compte ?{" "}
        <Link href="/users/signup">Créez en un</Link>
      </p>
    </>
  );
};

export default Login;
