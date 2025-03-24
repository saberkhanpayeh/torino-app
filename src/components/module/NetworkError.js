import Image from "next/image";
import React from "react";
import styles from "@/components/module/NetworkError.module.css";
function NetworkError({ reset }) {
  return (
    <div className={styles.container}>
      <div>
        <h2>اتصال با سرور برقرار نیست!</h2>
        <p>لطفا بعدا دوباره امتحان کنید</p>
        {reset ? <button onClick={() => reset()}>تلاش مجدد</button> : null}
      </div>
      <Image
        src="/images/error-robot.png"
        width={555}
        height={555}
        alt="error-image"
        priority={true}
      />
    </div>
  );
}

export default NetworkError;
