import React, { ForwardedRef, forwardRef, ReactNode } from "react";

type PrimaryButtonProps = {
  children?: ReactNode | string;
  onClick?: () => void;
  className?: string;
  forwardedRef?: ForwardedRef<HTMLButtonElement>;
};

export const PrimaryButton = ({ children, className, onClick, forwardedRef }: PrimaryButtonProps) => {
  return (
    <button
      ref={forwardedRef}
      onClick={onClick}
      className={
        "focus:outline-none text-white text-sm py-2.5 px-5 " +
        "rounded-md bg-gradient-to-r from-blue-400 to-blue-600 transform select-none " +
        `${className ?? ""}`
      }
    >
      {children ?? "ボタン"}
    </button>
  );
};

export const PrimaryButtonRef = forwardRef<HTMLButtonElement, PrimaryButtonProps>((props: PrimaryButtonProps, ref) => {
  return <PrimaryButton {...props} forwardedRef={ref} />;
});
