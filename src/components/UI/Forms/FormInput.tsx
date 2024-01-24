"use client"

import { MailIcon, PasswordKeyIcon, UserIcon } from "components/UI";

import classes from "styles/components/UI/form.module.scss";
import { ChangeEventHandler, FocusEvent, useEffect, useState } from "react";

interface MyFormProps {
  type: string;
  id: string;
  value: string;
  error?: string;
  onChange: ChangeEventHandler;
}

enum ErrorHandling {
  BLANK = "blank",
  VALIDATED = "validated",
  ERROR = "error",
}

const FormInput = ({ type, id, value, error = "", onChange }: MyFormProps) => {
  const [errorStatus, setErrorStatus] = useState<ErrorHandling>(
    ErrorHandling.BLANK
  );

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage(error);

    if (errorMessage !== "") {
      setErrorStatus(ErrorHandling.ERROR);
    }
  }, [error, errorMessage]);

  // console.log(errorMessage);

  let iconComponent;
  let placeholder;

  if (id === "email") {
    iconComponent = <MailIcon />;
    placeholder = "Email";
  } else if (id === "username") {
    iconComponent = <UserIcon />;
    placeholder = "Nom d'utilisateur";
  } else if (id === "password" || id === "password2") {
    iconComponent = <PasswordKeyIcon />;
    placeholder = "Mot de passe";
  }

  const handleUnfocus = (e: FocusEvent) => {
    const mailRegexp = new RegExp(/^\S{2,}@[a-z]{3,}\.[a-z]{2,}$/, "gm");
    const passwordRegexp = new RegExp(/^\S{6,18}$/, "gm");
    if (
      (id === "email" && value !== "" && !mailRegexp.test(value)) ||
      (id === "password" && value !== "" && !passwordRegexp.test(value))
    ) {
      setErrorStatus(ErrorHandling.ERROR);
    } else if (value !== "") {
      setErrorStatus(ErrorHandling.VALIDATED);
    } else {
      setErrorStatus(ErrorHandling.BLANK);
    }
  };

  return (
    <div>
      <div className={`${classes["form__group"]} ${classes[errorStatus]}`}>
        {iconComponent}
        <input
          type={type}
          id={id}
          className={classes["form__field"]}
          placeholder={placeholder}
          name={id}
          onChange={onChange}
          onBlur={handleUnfocus}
          value={value}
          required
        />
      </div>
      <p className={classes["error__field"]}>{ errorMessage }</p>
    </div>
  );
};

export default FormInput;
