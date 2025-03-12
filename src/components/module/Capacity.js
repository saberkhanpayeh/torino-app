"use client";
import { useTourDetailsData } from "@/services/queries";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/components/module/Capacity.module.css";
import { ThreeDots } from "react-loader-spinner";
function Capacity({ tourId }) {
  const { data,isLoading } = useTourDetailsData(tourId);
  const tourData = data?.data || "";

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000); 

  //   return () => clearTimeout(timer); 
  // }, []);

  // console.log(tourData);
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <Image src="/images/seat8.png" width={20} height={20} />
        <p>ظرفیت تور</p>
      </div>
      {!isLoading ? (
        <>
          {tourData.availableSeats > 0 ? (
            <sapn className={styles.available}>
              {tourData.availableSeats} جایگاه خالی
            </sapn>
          ) : (
            <span className={styles.notAvailable}>اتمام ظرفیت!</span>
          )}
        </>
      ) : (
        <ThreeDots color="#28A745" height="60" width="60" wrapperStyle={{marginRight:"10px"}}/>
      )}
    </div>
  );
}

export default Capacity;
