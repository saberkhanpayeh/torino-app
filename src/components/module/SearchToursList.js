import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/module/SearchToursList.module.css";
import Image from "next/image";
import { convertMiladiToJalali } from "@/utils/convertDate";
import Detail from "../icons/Detail";
import { useRouter } from "next/navigation";
function SearchToursList({ tours,isOpen,setIsOpen }) {
   const toursMenuRef=useRef(null);
   
   useEffect(()=>{
    const handleClickOutside = (event) => {
        if (toursMenuRef.current && !toursMenuRef.current.contains(event.target)) {
         setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
   },[])
   return (
    <div className={styles.container}>
      {tours?.length && isOpen ? (
        <ul ref={toursMenuRef} key="tours-list">
          {tours.map((tour) => (
            <TourItem key={tour.id} tour={tour} />
          ))}
        </ul>
      ) : (
        !tours?.length && isOpen && (
          <p ref={toursMenuRef} className={styles.notFound}>تور مورد نظر یافت نشد!!</p>
        )
      )}
    </div>
  );
}
export default SearchToursList;
const TourItem = ({ tour }) => {
  const { id,title, image, startDate, endDate, fleetVehicle, price } = tour;
  const { highFormat, middleFormat, monthName } =
    convertMiladiToJalali(startDate);
  //   console.log(highFormat);
  const router=useRouter();
  const tourHandler=(id)=>{
      router.push(`/tours/${id}`);
  }
  return (
    <li className={styles.detail}>
      <Image src={image} width={100} height={56} alt="tour-picture" />
        <div className={styles.title}>
          <h3>{title}</h3>
          <p>
            {highFormat} - {fleetVehicle}
          </p>
        </div>
      <div className={styles.reservBtn}>
        <p><Detail/><span>جزئیات تور</span></p>
        <button onClick={()=>tourHandler(id)}>مشاهده و رزرو</button>
      </div>
    </li>
  );
};
