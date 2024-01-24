"use client";

import RootLayout from "layouts/layout";

import "styles/globals.scss";

import { Logo, Container } from "components/UI";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <main>
        <Container>
          <Logo>CozyCasa</Logo>
          {children}
        </Container>
      </main>
    </RootLayout>
  );
};

export default HomeLayout;
