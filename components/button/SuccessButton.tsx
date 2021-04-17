import React, { ForwardedRef, forwardRef, ReactNode } from "react";

type SuccessButtonProps = {
  children?: ReactNode | string;
  onClick?: () => void;
  className?: string;
  forwardedRef?: ForwardedRef<HTMLButtonElement>;
};

export const SuccessButton = ({ children, className, onClick, forwardedRef }: SuccessButtonProps): JSX.Element => {
  return (
    <button
      ref={forwardedRef}
      onClick={onClick}
      className={
        "focus:outline-none text-white text-sm py-2.5 px-5 " +
        "rounded-md bg-gradient-to-r from-green-400 to-green-600 transform select-none " +
        `${className ?? ""}`
      }
    >
      {children ?? "ボタン"}
    </button>
  );
};

export const PrimaryButtonRef = forwardRef<HTMLButtonElement, SuccessButtonProps>((props: SuccessButtonProps, ref) => {
  return <SuccessButton {...props} forwardedRef={ref} />;
});
PrimaryButtonRef.displayName = "PrimaryButtonRef";
