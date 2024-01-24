import classes from "styles/components/UI/container.module.scss";

interface MyLogoProps {
  children: React.ReactNode;
}

const Container = ({ children }: MyLogoProps) => {
  return (
    <div className={classes.container}>{children}</div>
  );
}

export default Container;
