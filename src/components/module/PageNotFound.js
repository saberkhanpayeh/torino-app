"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/components/module/PageNotFound.module.css";
function PageNotFound() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div>
        <h2>صفحه مورد نظر یافت نشد!</h2>
        <button onClick={() => router.push("/")}>بازگشت به صفحه اصلی</button>
      </div>
      <Image src="/images/404.png" width={555} height={555} alt="not-found" priority={true} />
      
    </div>
  );
}

export default PageNotFound;
