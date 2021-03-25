import React, { ReactNode, useEffect, useRef } from "react";

type OutsideClickListenerProps = {
  children: ReactNode;
  onOutsideClick?: () => void;
  onInsideClick?: () => void;
};

const OutSideClickListener = ({ children, onOutsideClick, onInsideClick }: OutsideClickListenerProps): JSX.Element => {
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventClickOutside = (event: MouseEvent) => {
      if (childrenRef.current && childrenRef.current.contains(event.target as Node)) {
        if (onInsideClick) {
          onInsideClick();
        }
      } else {
        if (onOutsideClick) {
          onOutsideClick();
        }
      }
    };
    document.addEventListener("mousedown", eventClickOutside);
    return () => {
      document.removeEventListener("mousedown", eventClickOutside);
    };
  }, [childrenRef, onInsideClick, onOutsideClick]);

  return <div ref={childrenRef}>{children}</div>;
};

export default OutSideClickListener;
