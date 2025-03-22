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
import { vehicleType } from "@/constant/transport";
import { getDestinationCity, getOriginCity } from "@/constant/cities";
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
  const { highFormat: goneDate } = convertMiladiToJalali(startDate);
  const { highFormat: returnDate } = convertMiladiToJalali(endDate);
  const vehicle=vehicleType(fleetVehicle)
  const originCity=getOriginCity(origin.name);
  const destinationCity=getDestinationCity(destination.name);
  //console.log(getTourStatus(endDate));

  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <ul>
          <li>
            <SunFog />
            <p className={styles.text1}>{title}</p>
          </li>
          <li className={`${styles.vehicle} ${fleetVehicle==="airplane" && styles.airplane}`}>
            {vehicle.icon}
            <p className={styles.text1}>سفر با {vehicle.label}</p>
          </li>
          <li>
            <p className={styles.text2}>
              {originCity} به {destinationCity}
            </p>
            <span className={styles.dot}>󠁯•󠁏󠁏</span>
            <span>{goneDate}</span>
          </li>
          <li>
            <p className={styles.text2}>تاریخ برگشت</p>
            <span className={styles.dot}>•󠁏󠁏</span>
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
