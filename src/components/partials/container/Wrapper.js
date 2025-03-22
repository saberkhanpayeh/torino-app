import React from "react";
import styles from "@/components/partials/container/Wrapper.module.css";
function Wrapper({ children, page }) {
  return (
    <>
      {page === "cart" && <div className={styles.cartWrapper}>{children}</div>}
      {page === "tour-details" && <div className={styles.tourWrapper}>{children}</div>}
    </>
  );
}

export default Wrapper;
