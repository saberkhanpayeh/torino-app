import { convertMiladiToJalali, getPeriodTour } from "@/utils/convertDate";
import Image from "next/image";
import React from "react";
import styles from "@/components/module/Tours.module.css"
import Link from "next/link";
import { e2pFormat } from "@/utils/helper";
function Tours({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <h2>همه تور ها</h2>
      <ul className={styles.cards}>
        {data.map((tour) => (
          <TourItem key={tour.id} tour={tour} />
        ))}
      </ul>
    </div>
  );
}

export default Tours;

const TourItem = ({ tour }) => {
  const { title, image, startDate, endDate, fleetVehicle, price } = tour;
  const { highFormat, middleFormat, monthName } =
    convertMiladiToJalali(startDate);
  const periodTour = getPeriodTour(startDate, endDate);
  // console.log({highFormat,middleFormat,monthName,periodTour});
  return (
    <li className={styles.card}>
      <Image src={image} width={278.44} height={159} alt="tour-image" />
      <div>
        <div className={styles.top}>
          <h3>{title}</h3>
          <p>{`${monthName} ماه . ${e2pFormat(periodTour)} روزه - پرواز - هتل 5س...`}</p>
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
