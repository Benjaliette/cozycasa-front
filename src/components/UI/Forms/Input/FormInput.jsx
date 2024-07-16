import classes from './FormInput.module.css';
import { MailIcon, KeyIcon } from 'src/components';

import PropTypes from "prop-types";

const FormInput = ({placeholder, type}) => {
  let icon;

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
    <div className={ classes.form__group }>
      { icon }
      <input
        type={ type }
        id="name"
        name="name"
        className={ classes.input }
        placeholder={ placeholder }
      />
    </div>
  )

}

FormInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default FormInput;
