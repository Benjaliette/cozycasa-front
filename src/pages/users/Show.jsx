import { Button } from "src/components";
import { logoutUser } from "src/store/users/userActions";
import { HomeItem, HomeButton, AddBadge, ArrowBadge } from "src/components";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Show = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();

  const { loginSuccess } = useSelector(
    (state) => state.user
  );

  const { homes } = useSelector(
    (state) => state.home
  )

  const navigate = useNavigate();

  useEffect(() => {
    if (!loginSuccess) navigate('/');
  }, [loginSuccess, navigate])

  const submitLogout = () => {
    dispatch(logoutUser());
  }

  const homeComponents = homes
    .map((home) => {
      return <HomeItem key={home._id} home={ home } />
    })

  return (
    <>
      { homeComponents }

      <HomeButton>
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

      {/* <h1>User page</h1>
      <form action="" onSubmit={handleSubmit(submitLogout)}>
        <Button size="sm" color="green" type="submit">Logout</Button>
      </form> */}
    </>
  )
}

export default Show;
