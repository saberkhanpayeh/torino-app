import Image from "next/image";
import React from "react";
import { services } from "@/constant/serviceData";
import styles from "@/components/module/OurService.module.css";
import OurServiceItem from "./OurServiceItem";

function OurService() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/images/services/pic2-1.png"
          width={780}
          height={300}
          alt="service-image"
        />
        <div className={styles.overly}>
          <div className={styles.title}>
            <h2>خدمات رفاهی تورینو</h2>
            <p>از انتخاب ما پشیمان نخواهید شد...</p>
          </div>
        </div>
      </div>

      <ul className={styles.cards}>
        {services?.map((service) => (
          <OurServiceItem id={service.id} data={service} />
        ))}
      </ul>
    </div>
  );
}

export default OurService;
