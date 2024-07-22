import classes from "./Forms.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { PropTypes } from "prop-types";

import { Button } from "src/components";

const AddTodoForm = ({ isOpen, register, onClick, onSubmit }) => {


  return (
    <>
      <div className={ `${ isOpen ? classes.modal__backdrop : '' }` }></div>
      <AnimatePresence>
        {
          isOpen &&
          <motion.form
            initial={{ y: "100vh" }}
            exit={{ y: "100vh" }}
            animate={{ y: 100 }}
            transition={{
              // duration: 0.2,
              type: "spring",
              damping: 25,
              mass: 1,
              stiffness: 200
            }}
            className={ `${classes.form} ${classes.form__todo} container  mx-auto px-10` }
            onSubmit={ onSubmit }
          >
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
          </motion.form>
        }
      </AnimatePresence>
    </>
  )
}

AddTodoForm.propTypes = {
  isOpen: PropTypes.bool,
  register: PropTypes.any,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func
}

export default AddTodoForm;
