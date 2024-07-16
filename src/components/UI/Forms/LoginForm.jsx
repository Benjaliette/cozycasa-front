import FormInput from "./Input/FormInput";
import { Button } from "src/components";

const LoginForm = () => {
  return (
    <form action="">
      <FormInput type="email" placeholder="Email"></FormInput>
      <FormInput type="password" placeholder="Mot de passe"></FormInput>
      <Button href="/login" size="sm" color="green">Suivant</Button>
    </form>
  )
}

export default LoginForm;
