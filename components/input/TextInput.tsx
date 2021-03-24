import React, { ChangeEvent } from "react";

type TextInputProps = {
  label: string | JSX.Element;
  type?: string;
  initValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
};

const TextInput = (props: TextInputProps) => {
  return (
    <>
      <label className={"w-full " + props.className ?? ""}>
        {typeof props.label === "string" ? <span className="text-gray-500">{props.label}</span> : props.label}
        <input
          type={props.type ?? "text"}
          className={
            "inline-block border border-gray-700 focus:ring rounded-md " +
              "focus:ring-indigo-500 focus:outline-none focus:border-transparent w-full px-2 py-2 " +
              props.inputClassName ?? ""
          }
          value={props.initValue}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </label>
    </>
  );
};

export default TextInput;
