"use client";

import RootLayout from "layouts/layout";
import Navbar from "components/UI/Navbar/Navbar";
import Header from "components/UI/Header/Header";

import classes from "styles/components/pages/userpage.module.scss";

interface UserLayoutProps {
  children: React.ReactNode,
  headerTitle: string,
}

const UserLayout = ({ children, headerTitle }: UserLayoutProps) => {
  return (
    <RootLayout>
        <Header></Header>
        <main className={ classes.main__section }>{children}</main>
        <Navbar></Navbar>
    </RootLayout>
  );
};

export default UserLayout;
