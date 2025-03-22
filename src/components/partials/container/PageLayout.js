import React from "react";
import styles from "@/components/partials/container/PageLayout.module.css";
function PageLayout({ children, page }) {
  return (
    <>
      {page === "edit-profile" && (
        <div className={styles.editpage}>{children}</div>
      )}
      {
        page==="profile" &&(<div className={styles.profilepage}>{children}</div>)
      }
      {
        page==="my-tours" &&(<div className={styles.myTours}>{children}</div>)
      }
      {
        page==="transactions" &&(<div className={styles.transactionPage}>{children}</div>)
      }
    </>
  );
}

export default PageLayout;
