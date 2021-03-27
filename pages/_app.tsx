import "tailwindcss/tailwind.css";
import "../css/styles.css";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import rootStore from "../redux/rootStore";
import { fetchCurrentUser } from "../redux/currentUser/asyncActions";

const AppInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return null;
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={rootStore}>
      <Component {...pageProps} />
      <AppInit />
    </Provider>
  );
};

export default App;
