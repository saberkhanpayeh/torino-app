import React from "react";
import styles from "@/components/element/Button.module.css";
function Button({ children, type, onClick, disabled = false, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
