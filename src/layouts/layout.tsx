import "styles/globals.scss";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "store/store";
import { PersistGate } from "redux-persist/integration/react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <Head>
        <title>CozyCasa</title>
        <meta name="description" content="Bienvenue chez vous" />
      </Head>
      <body>
        <React.StrictMode>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </React.StrictMode>
      </body>
    </html>
  );
};

export default RootLayout;
