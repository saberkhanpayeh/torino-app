import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "@/components/layout/Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <Header />
        <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
