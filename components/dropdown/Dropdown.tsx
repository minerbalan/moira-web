import React, { ReactNode, useState } from "react";
import OutSideClickListener from "../outsideClickListener/OutsideClickListener";

export type DropdownProps = {
  menuName: string | JSX.Element;
  children?: ReactNode;
  initOpenMenu: boolean;
  backdropClose: boolean;
};

const Dropdown = ({ menuName, children, initOpenMenu, backdropClose }: DropdownProps): JSX.Element => {
  if (initOpenMenu == undefined) {
    initOpenMenu = false;
  }
  const [openMenu, setOpenMenu] = useState(initOpenMenu);

  const showCss = "transition ease-out duration-100 transform opacity-100 scale-100";

  const hideCss = "transition ease-in duration-75 transform opacity-0 scale-95";

  const outsideClickListener = backdropClose
    ? () => {
        if (openMenu) {
          setOpenMenu(false);
        }
      }
    : undefined;

  return (
    <OutSideClickListener onOutsideClick={outsideClickListener}>
      <div className="relative inline-block text-left">
        <div>
          <div
            className="inline-flex justify-center w-full rounded-md
                    text-sm font-medium text-gray-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100
                    focus:ring-indigo-500"
            aria-expanded="true"
            aria-haspopup="true"
            role="button"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {menuName}
          </div>
        </div>
        <div
          className={
            `origin-top-right absolute right-0 mt-2 w-56 rounded-md ` +
            `shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${
              openMenu ? showCss : hideCss
            }`
          }
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {children}
        </div>
      </div>
    </OutSideClickListener>
  );
};

Dropdown.defaultProps = {
  initOpenMenu: false,
  backdropClose: true,
};

export default Dropdown;
