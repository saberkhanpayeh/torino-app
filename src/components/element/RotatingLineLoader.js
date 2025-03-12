import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "@/components/element/RotatingLineLoader.module.css"
function RotatingLineLoader() {
  return (
    <div className={styles.loader} >
      <RotatingLines strokeColor="#28A745" strokeWidth="4" width="150" />
    </div>
  );
}

export default RotatingLineLoader;
