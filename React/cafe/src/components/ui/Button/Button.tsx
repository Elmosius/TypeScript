import type { ReactNode } from "react";

interface PropTypes {
  type?: "button" | "submit" | "reset";
  children?: string | ReactNode;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary";
}

const Button = (props: PropTypes) => {
  const colors = {
    primary: "bg-black border border-black text-white",
    secondary: "bg-white border border-black text-black",
  };
  const {
    type = "button",
    children,
    onClick,
    className,
    color = "primary",
  } = props;

  return (
    <button
      className={`px-10 py-1.5 rounded-4xl hover:opacity-80  ${className} ${colors[color]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
