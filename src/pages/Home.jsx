import { Button, ArrowIcon } from 'src/components';
import welcome from "src/assets/welcome.svg";

import { Link } from "react-router-dom";

// import { persistStore } from 'redux-persist';
import { store } from "src/store/store";

const Home = () => {
  // const persistor = persistStore(store);
  // persistor.pause();
  //   persistor.flush().then(() => {
  //     return persistor.purge();
  //   });

  return (
    <>
      <h1>Bienvenue chez vous</h1>
      <img className='mb-20' src={welcome} alt="Two persons looking at two screens" />
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
