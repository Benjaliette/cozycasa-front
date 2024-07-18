import { Link } from "react-router-dom";
import { SignupForm } from "src/components";

const Signup = () => {
  return (
    <>
      <h1>Créer un compte</h1>
      <SignupForm />
      <p className='paragraph'>
        Vous avez déjà un compte ? <Link to="/login">Identifiez vous</Link>
      </p>
    </>
  );
}

export default Signup;
