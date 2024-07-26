import classes from './Forms.module.css';
import { FormModal, Button } from "src/components";

const CreateHomeForm = ({ isOpen, onClick, onSubmit, register }) => {
  return (
    <FormModal isOpen={ isOpen } onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Nom du foyer"
        { ... register('name')}
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

export default CreateHomeForm;
