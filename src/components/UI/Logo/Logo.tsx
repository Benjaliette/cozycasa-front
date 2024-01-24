import classes from "styles/components/UI/logo.module.scss";

import Link from "next/link";

interface MyLogoProps {
  children: React.ReactNode;
}

export default function Logo({ children }: MyLogoProps) {
  return (

      <h1 className={classes.logo}>
        <Link href="/">{children}</Link>
      </h1>
  );
}
