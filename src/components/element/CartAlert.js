"use client";
import { useCartData } from "@/services/queries";
import React, { useEffect, useState } from "react";
import Profile from "../icons/Profile";
import styles from "@/components/element/CartAlert.module.css";
import { useRouter } from "next/navigation";
function CartAlert() {
  const router = useRouter();
  const { data, isLoading, isError } = useCartData({
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
  const tourData = data?.data || "";
  // console.log(tourData)
  
  const clickHandler = () => {
    //router.push("cart?order&tourId=b2c3d4e5-f678-90ab-cdef-234567890abc")
    router.push(`/cart?order&tourId=${tourData.id}`);
  };

  if (!data && !isLoading)
    return (
      <span>
        <Profile />
      </span>
    );
  if (isError)
    return (
      <span>
        <Profile />
      </span>
    );
  return (
    <button className={styles.btn} onClick={clickHandler}>
      <div className={styles.notif}>
        <div className={styles.inner}>
          <span className={styles.ping}></span>
          <span className={styles.badge}>1</span>
        </div>
      </div>
      <Profile />

      <span className={styles.pulse}></span>

      <div className={styles.tooltip}>
        <div className={styles.tooltipText}>تسویه سبد خرید</div>
        <div className={styles.tooltipArrow}></div>
      </div>
    </button>
  );
}

export default CartAlert;
