import classes from './FormInput.module.css';
import { MailIcon, KeyIcon } from 'src/components';

import PropTypes from "prop-types";
import { useEffect, useState } from 'react';

const FormInput = ({placeholder, type, register, isError}) => {
  let icon;
  const initialClass = isError ? classes.error : "";
  const [errorClass, setErrorClass] = useState(initialClass);

  useEffect(() => {
    setErrorClass(isError ? classes.error : "");
  }, [isError])

  const modifyError = () => {
    setErrorClass("");
  }

  switch (type) {
    case "email":
      icon = <MailIcon />
      break;
    case "password":
      icon = <KeyIcon />
      break;
    default:
      break;
  }

  return (
    <div className={ `${classes.form__group} ${ errorClass }` }>
      { icon }
      <input
        type={ type }
        id={ type }
        className={classes.input}
        placeholder={ placeholder }
        { ...register(type, { onChange: modifyError}) }
      />
    </div>
  )

}

FormInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.any,
  isError: PropTypes.bool
};

export default FormInput;
