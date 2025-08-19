import type { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button = (props: PropTypes) => {
  const { children, type = "button", onClick } = props;

  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
