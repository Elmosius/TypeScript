import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface PropTypes {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button = (props: PropTypes) => {
  const { children, type = "button", onClick } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${styles.button} mx-2`}
      style={{ backgroundColor: "gray" }}
    >
      {children}
    </button>
  );
};

export default Button;
