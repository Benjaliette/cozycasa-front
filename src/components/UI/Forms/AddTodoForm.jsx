import classes from "./Forms.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { PropTypes } from "prop-types";

import { Button, FormModal } from "src/components";

const AddTodoForm = ({ isOpen, register, onClick, onSubmit }) => {
  return (
    <FormModal onSubmit={ onSubmit } isOpen={ isOpen }>
      <input
        type="text"
        placeholder="Nom de la tâche"
        { ... register('title')}
        className={ classes.input__todo }
      />
      <div className={classes.form__actions} >
        <p
          className="font-bold underline underline-offset-4"
          onClick={ onClick }
        >
          Annuler
        </p>
        <Button type="submit" size="sm" color="green">Ajouter</Button>
      </div>
    </FormModal>
  )
}

AddTodoForm.propTypes = {
  isOpen: PropTypes.bool,
  register: PropTypes.any,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func
}

export default AddTodoForm;
