import { Button, ArrowIcon } from 'src/components';
import welcome from "src/assets/welcome.svg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Bienvenue chez vous</h1>
      <img className='my-20' src={welcome} alt="Two persons looking at two screens" />
      <Button href="/login" size="lg" color="green">
        <p>S&apos;identifier</p>
        <ArrowIcon />
      </Button>
      <p className='paragraph'>
        Vous n&apos;avez pas de compte ? <Link to="/signup">Créez en un</Link>
      </p>
    </>
  );
}

export default Home;
