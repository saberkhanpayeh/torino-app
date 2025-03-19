"use client";
import React, { useState } from "react";
import styles from "@/components/module/MobileViewTours.module.css";
import DownArrow from "../icons/mobile-icons/DownArrow";
import { convertMiladiToJalali, getPeriodTour } from "@/utils/convertDate";
import { e2pFormat } from "@/utils/helper";
import Link from "next/link";
import Image from "next/image";
function MobileViewTours({ tours }) {
  const [loadItem, setLoadItem] = useState(4);
  const loadHandler = () => {
    setLoadItem((loadItem) => loadItem + 4);
  };
  return (
    <div className={styles.mobileContainer}>
      <ul className={styles.cards}>
        {tours.slice(0, loadItem).map((tour) => (
          <TourItem key={tour.id} tour={tour} />
        ))}
      </ul>
      {loadItem < tours.length && (
        <button onClick={loadHandler}>
          مشاهده بیشتر
         <DownArrow/>
        </button>
      )}
    </div>
  );
}

export default MobileViewTours;
const TourItem = ({ tour }) => {
  const { title, image, startDate, endDate, fleetVehicle, price } = tour;
  const { highFormat, middleFormat, monthName } =
    convertMiladiToJalali(startDate);
  const periodTour = getPeriodTour(startDate, endDate);
  return (
    <li className={styles.card}>
      <Image
        src={image}
        width={278.44}
        height={159}
        alt="tour-image"
        priority={true}
      />
      <div>
        <div className={styles.top}>
          <h3>{title}</h3>
          <p>{`${monthName} ماه . ${e2pFormat(
            periodTour
          )} روزه - پرواز - هتل 5س...`}</p>
        </div>
        <div className={styles.bottom}>
          <Link href={`/tours/${tour.id}`}>رزرو</Link>
          <p>
            <span>{price.toLocaleString()}</span>تومان
          </p>
        </div>
      </div>
    </li>
  );
};
