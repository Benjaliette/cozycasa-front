"use client";

import { useDispatch, useSelector } from "react-redux";
import UserLayout from "./layout";
import { redirect } from "next/navigation";
import { Button, Container, PlusBadge, ArrowBadge } from "components/UI";
import { AppDispatch } from "store/store";
import { logout } from "store/users/userSlice";

import classes from "styles/components/pages/userpage.module.scss";

interface UserShowProps {
  params: {
    id: number;
  };
}

const UserShow = ({ params }: UserShowProps) => {
  const { user, isLoggedIn } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  if (!isLoggedIn.value) {
    redirect("/users/login");
  }

  const handleLogout = () => {
    dispatch(logout());
    console.log(user);
    console.log(isLoggedIn);
  };

  return (
    <section className={classes.user__section}>
      <Container>
        <div className={classes.user__btn}>
          <Button
            size="lg"
            color="white"
            href={`/homes/new/`}
          >
            <p>Créer un foyer</p>
            <PlusBadge color="secondary" size="sm"></PlusBadge>
          </Button>
        </div>
        <div className={classes.user__btn}>
          <Button
            size="lg"
            color="white"
            href={`/homes/join/`}
          >
            <p>Rejoindre un foyer</p>
            <ArrowBadge color="primary" size="sm"></ArrowBadge>
          </Button>
        </div>
        <div className={classes.user__btn}>
          <Button size="sm" color="green" type="action" onClick={handleLogout}>
            Deconnexion
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default UserShow;
