"use client";
import React from "react";
import styles from "@/components/module/MyToursList.module.css";
import { useMyToursList } from "@/services/queries";
import SunFog from "../icons/SunFog";
import Bus from "../icons/Bus";
import { convertMiladiToJalali, getTourStatus } from "@/utils/convertDate";
import { shortenTransactionId } from "@/utils/helper";
import { isError } from "@tanstack/react-query";
import NetworkError from "./NetworkError";
function MyToursList() {
  const { data, isLoading,isError } = useMyToursList();
  const tours = data?.data || [];
  // if(isError)return<NetworkError/>
  return (
    <div className={styles.list}>
      {
        tours?.length===0 && !isLoading ? <div className={styles.notFound}><p>سابقه ای برای تور های شما یافت نشد!</p></div>:null
      }
      { tours?.length > 0 && !isLoading ? tours.map((tour) => (
        <ToursItem tour={tour} key={tour.id} />
      )):null}
      
    </div>
  );
}
function ToursItem({ tour }) {
  const {
    id,
    origin,
    destination,
    startDate,
    endDate,
    title,
    fleetVehicle,
    price,
    capacity,
    image,
  } = tour;
  const { middleFormat: goneDate } = convertMiladiToJalali(startDate);
  const { middleFormat: returnDate } = convertMiladiToJalali(endDate);
  //console.log(getTourStatus(endDate));

  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <ul>
          <li>
            <SunFog />
            <p>{title}</p>
          </li>
          <li>
            <Bus />
            <p>سفر با {fleetVehicle}</p>
          </li>
          <li>
            <p>
              {origin.name} به {destination.name}
            </p>
            <span>󠁯•󠁏󠁏</span>
            <span>{goneDate}</span>
          </li>
          <li>
            <p>تاریخ برگشت</p>
            <span>•󠁏󠁏</span>
            <span>{returnDate}</span>
          </li>
        </ul>
        <span
          className={
            getTourStatus(endDate)
              ? `${styles.badge}`
              : `${styles.badge} ${styles.end}`
          }
        >
          {getTourStatus(endDate) ? "در حال برگزاری" : "به اتمام رسیده"}
        </span>
      </div>
      <div className={styles.footer}>
        <ul>
          <li>
            <span>شماره تور</span>
            <p>{shortenTransactionId(id)}</p>
          </li>
          <li>
            <span>مبلغ پرداخت شده</span>
            <p>
              {price.toLocaleString()}
              <span className={styles.toman}>تومان</span>
            </p>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
export default MyToursList;
