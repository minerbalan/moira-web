import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Header from "../organisms/Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props): JSX.Element => {
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (currentUser.isLogout) {
      location.reload();
    }
  }, [currentUser.isLogout]);

  return (
    <>
      <Head>
        <title>{(title ?? "index") + " | moira"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-gray-50">{children}</main>
        <footer className="bg-gray-400">
          <hr />
          <span>Footer</span>
        </footer>
      </div>
    </>
  );
};

export default Layout;
