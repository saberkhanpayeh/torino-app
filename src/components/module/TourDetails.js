import { convertMiladiToJalali, getPeriodTour } from "@/utils/convertDate";
import Image from "next/image";
import React from "react";
import UserTick from "@/components/icons/UserTick";
import Map from "@/components/icons/Map";
import ModalStar from "@/components/icons/ModalStar";
import RoutinBold from "@/components/icons/RoutinBold";
import Calender from "@/components/icons/Calender";
import Bus from "@/components/icons/Bus";
import DoubleUser from "@/components/icons/DoubleUser";
import Security from "@/components/icons/Security";
import styles from "@/components/module/TourDetails.module.css"
import Wrapper from "../partials/container/Wrapper";
import BuyButton from "./BuyButton";
import Capacity from "./Capacity";
function TourDetails({ data }) {
    const {id,origin,startDate,endDate,title,fleetVehicle,price,capacity,image}=data
    const periodTour=getPeriodTour(startDate,endDate);
    const night=periodTour-1;
    const {middleFormat:goneDate}=convertMiladiToJalali(startDate);
    const {middleFormat:returnDate}=convertMiladiToJalali(endDate);
    
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={image} width={397} height={265} alt="tour-image" priority={true}/>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.titleContainer}>
              <h2>{title}</h2>
              <p>{periodTour} روز و {night} شب</p>
            </div>
            <Capacity tourId={id}/>
          </div>
            <ul>
                <li><UserTick/>تورلیدر از مبدا</li>
                <li><Map/>برنامه سفر</li>
                <li><ModalStar/>تضمین کیفیت</li>
            </ul>
          <div className={styles.btnContainer}>
          <p>
            <span>{price.toLocaleString()}</span>تومان
          </p>
          <BuyButton id={id}/>
          </div>
        </div>
      </div>
        <ul className={styles.footer}>
            <li><div><RoutinBold/><span>مبدا</span></div><p>{origin.name}</p></li>
            <li><div><Calender/><span>تاریخ رفت</span></div><p>{goneDate}</p></li>
            <li><div><Calender/><span>تاریخ برگشت</span></div><p>{returnDate}</p></li>
            <li><div><Bus/><span>حمل و نقل</span></div><p>{fleetVehicle}</p></li>
            <li><div><DoubleUser/><span>ظرفیت</span></div><p>حداکثر{capacity} نفر</p></li>
            <li><div><Security/><span>بیمه</span></div><p>بیمه 50 هزار دیناری</p></li>
        </ul>

    </div>
  );
}

export default TourDetails;
