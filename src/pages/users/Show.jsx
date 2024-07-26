import { createHome } from "src/store/homes/homeActions";
import { logoutUser } from "src/store/users/userActions";
import {
  HomeItem,
  HomeButton,
  AddBadge,
  ArrowBadge,
  CreateHomeForm
} from "src/components";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Show = () => {
  const [ isForm, setIsForm ] = useState(false);
  const dispatch = useDispatch();

  const { loginSuccess } = useSelector(
    (state) => state.user
  );

  const { homes } = useSelector(
    (state) => state.home
  )

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!loginSuccess) navigate('/');
  }, [loginSuccess, navigate])

  const submitLogout = () => {
    dispatch(logoutUser());
  }

  const homeComponents = homes
    .map((home) => {
      return <HomeItem key={home._id} home={ home } />
    });

  const submitHome = async (data) => {
    await dispatch(createHome({name: data.name}));

    setIsForm(false);
  }

  return (
    <div className="h-screen">
      { homeComponents }

      <HomeButton onClick={ () => setIsForm(true) }>
        <p>Créer un foyer</p>
        <AddBadge
          color="yellow"
          size="sm"
        />
      </HomeButton>
      <HomeButton>
        <p>Rejoindre un foyer</p>
        <ArrowBadge
          color="dark"
          size="sm"
        />
      </HomeButton>

      <CreateHomeForm
        isOpen={ isForm }
        onSubmit={ handleSubmit(submitHome) }
        onClick={ () => setIsForm(false) }
        register={ register }
      />

      {/* <h1>User page</h1>
      <form action="" onSubmit={handleSubmit(submitLogout)}>
        <Button size="sm" color="green" type="submit">Logout</Button>
      </form> */}
    </div>
  )
}

export default Show;
