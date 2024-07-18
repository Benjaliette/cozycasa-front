import classes from './FormInput.module.css';
import { MailIcon, KeyIcon, UserIcon } from 'src/components';

import PropTypes from "prop-types";
import { useEffect, useState } from 'react';

const FormInput = ({placeholder, id, type, register, isError}) => {
  let icon;
  const initialClass = isError ? classes.error : "";
  const [errorClass, setErrorClass] = useState(initialClass);

  useEffect(() => {
    setErrorClass(isError ? classes.error : "");
  }, [isError])

  const modifyError = () => {
    setErrorClass("");
  }

  switch (id) {
    case "email":
      icon = <MailIcon />
      break;
    case "password":
    case "confirmPassword":
      icon = <KeyIcon />
      break;
    case "username":
      icon = < UserIcon />
      break;
    default:
      break;
  }

  return (
    <div className={ `${classes.form__group} ${ errorClass }` }>
      { icon }
      <input
        type={ type }
        id={ id }
        className={classes.input}
        placeholder={ placeholder }
        { ...register(id, { onChange: modifyError}) }
      />
    </div>
  )

}

FormInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.any,
  isError: PropTypes.bool
};

export default FormInput;
