import Image from "next/image";
import React from "react";
import styles from "@/components/module/Banner.module.css";
function Banner() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/banner/1.png"
        width={1440}
        height={350}
        alt="banner-picture"
      />
    </div>
  );
}

export default Banner;
