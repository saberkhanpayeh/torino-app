import React from "react";
import Button from "@/components/element/Button";
import Call from "@/components/icons/Call";
import Image from "next/image";
import styles from "@/components/module/Advertise.module.css";
function Advertise() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <h3>
          خرید تلفنی از <span>تورینو</span>
        </h3>
        <p>به هرکجا که میخواهید!</p>
        <Image src="/images/advertise-icon.png" width={308} height={225} />
      </div>
      <div className={styles.left}>
        <div className={styles.number}>
          <span>021-1840</span>
          <Call />
        </div>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
  );
}

export default Advertise;
