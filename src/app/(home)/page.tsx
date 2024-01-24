import {
  Logo,
  Container,
  Button,
  ArrowIconRight,
} from "components/UI";
import Image from "next/image";
import Link from "next/link";

import welcomeImg from "app/../../public/welcome.svg";

import classes from "styles/components/pages/indexpage.module.scss";

export default function Home() {
  const imageStyle = {
    margin: "0 auto",
    width: "100%",
    height: "50vh"
  };

  return (
    <>
      <h1>Bienvenue chez vous</h1>
      <Image
        src={welcomeImg}
        alt="two people looking at big messages screen"
        style={imageStyle}
        priority={true}
      />
      <Button size="lg" color="green" href="users/login">
        <p>S&apos;identifier</p>
        <ArrowIconRight />
      </Button>
      <p className="primary-para">
        Vous n&apos;avez pas de compte ?{" "}
        <Link href="users/signup">Créez en un</Link>
      </p>
    </>
  );
}
