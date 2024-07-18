import { Link } from "react-router-dom";

import { LoginForm } from "src/components";

const Login = () => {
  return (
    <>
      <h1>Identification</h1>
      <LoginForm />
      <p className='paragraph'>
        Vous n&apos;avez pas de compte ? <Link to="/signup">Créez en un</Link>
      </p>
    </>
  );
}

export default Login;
