import React from "react";
import styles from "@/components/module/WhyTorino.module.css";
import Slider from "./Slider";
function WhyTorino() {
  return (
    <div className={styles.continer}>
      <article className={styles.detail}>
        <div className={styles.title}>
          <span className={styles.icon}>؟</span>
          <h3>
            چرا <span>تورینو</span> ؟
          </h3>
        </div>

        <h4>تور طبیعت گردی و تاریخی </h4>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </article>
      <Slider/>
    </div>
  );
}

export default WhyTorino;
