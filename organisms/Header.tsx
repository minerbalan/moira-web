import Link from "next/link";
import { PrimaryButtonRef } from "../components/button/PrimaryButton";
import Dropdown from "../components/dropdown/Dropdown";
import React from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/currentUser/asyncActions";

const Header = () => {
  const { isLogin, isFetched, currentUser } = useCurrentUser();
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logoutUser());
  };

  return (
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
          {isFetched && !isLogin && (
            <Link href="/login" passHref>
              <PrimaryButtonRef className="my-2">ログイン</PrimaryButtonRef>
            </Link>
          )}
          {isFetched && isLogin && currentUser.userName && (
            <Dropdown menuName={<i className="bi bi-person-circle text-5xl" />}>
              <div className="py-1" role="none">
                <div className="block px-4 pt-2 text-sm text-gray-500 select-none">ログイン中のユーザー</div>
                <div className="block px-4 pb-2 text-sm text-gray-900 select-none font-bold">
                  {currentUser.userName}
                </div>
              </div>
              <div className="py-1" role="none">
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={onClickLogout}
                >
                  ログアウト
                </a>
              </div>
            </Dropdown>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
