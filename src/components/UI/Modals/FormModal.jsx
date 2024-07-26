import classes from "./Modals.module.css";

import { AnimatePresence, motion } from "framer-motion";

const FormModal = ({ children, isOpen, onSubmit }) => {
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
          { children }
        </motion.form>
      }
    </AnimatePresence>
  </>
  )
}

export default FormModal;
