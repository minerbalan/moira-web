import React, { ReactNode } from "react";
import Head from "next/head";
import { PrimaryButtonRef } from "./button/PrimaryButton";
import Link from "next/link";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Dropdown from "./dropdown/Dropdown";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props): JSX.Element => {
  const { isLogin, currentUser } = useCurrentUser();

  return (
    <>
      <Head>
        <title>{(title ?? "index") + " | moira"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header>
          <nav className="flex justify-between bg-gray-200">
            <div className="flex items-center ml-4 text-5xl">
              <Link href="/">
                <a>
                  <i className="bi bi-house" />
                </a>
              </Link>
            </div>
            <div />
            <div className="mr-4 flex items-center">
              {!isLogin && (
                <Link href="/login" passHref>
                  <PrimaryButtonRef className="my-2">ログイン</PrimaryButtonRef>
                </Link>
              )}
              {isLogin && currentUser.userName && (
                <Dropdown menuName={<i className="bi bi-person-circle text-5xl" />}>
                  <div className="py-1" role="none">
                    <div className="block px-4 pt-2 text-sm text-gray-500 select-none">ログイン中のユーザー</div>
                    <div className="block px-4 pb-2 text-sm text-gray-900 select-none font-bold">
                      {currentUser.userName}
                    </div>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      ログアウト
                    </a>
                  </div>
                </Dropdown>
              )}
            </div>
          </nav>
        </header>
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
