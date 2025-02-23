"use client";
import React from "react";
import styles from "@/components/module/TimerOtp.module.css";
function TimerOtp({ timer }) {
  return (
    <div className={styles.container}>
      {!timer.stop ? (
        <>
          <span className={styles.number}>{timer.minutes}</span>:
          <span className={styles.number}>
            {timer.second < 10 ? "0" : ""}
            {timer.second}
          </span>
          <span>تا ارسال مجدد کد</span>
        </>
      ) : (
        <>
          <span className={styles.number}>00</span>:<span className={styles.number}>00</span>
          <span>اتمام زمان</span>
        </>
      )}
    </div>
  );
}

export default TimerOtp;
