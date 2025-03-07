"use client";
import React, { useEffect, useState } from "react";
import { Calendar, CalendarProvider, DatePicker } from "zaman";
import styles from "@/components/element/InputBirthdate.module.css";
import "@/app/globals.css";
function InputBirthdate({setBirthDate,initialValue}) {
  const [inputDate, setInputDate] = useState("");
  useEffect(()=>{
    const value=initialValue ?(converDateToFarsiFromat(initialValue)):"";
    setInputDate(value);
    setBirthDate(initialValue);
  },[initialValue])
  const converDateToFarsiFromat=(date)=>{
    const farsiDatefromat=new Date(date).toLocaleDateString("fa-IR");
    return farsiDatefromat;
  }
  // the format that Datepicker library return this is
  /* Mon Mar 03 2025 13:58:35 GMT+0330 (Iran Standard Time) */
  // but we want UTC format of Date to store in DB so we have to convert it
  const handleDateChange = (e) => {
    // e.target.scrollIntoView({ behavior: "smooth", block: "center" });
    // console.log(e.value); 
  
    const inputDate = new Date(e.value);
    const isoString = inputDate.toISOString();
    const newDate=converDateToFarsiFromat(isoString);
    setInputDate(newDate);
    setBirthDate(isoString);
  };

  // console.log(inputDate);
  // console.log(new Date(Date.now()));
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="تاریخ تولد"
        readOnly
        className={styles.dateInput}
        value={inputDate}
      />
      <DatePicker
        onChange={handleDateChange}
        defaultValue={Date.now()}
        inputAttributes={{
          style: {
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            opacity: "0",
          },
        }}
        locale="fa"
      />
      <img
        src="/svg-files/calendar.svg"
        className={styles.calendarIcon}
        alt="calender"
      />
    </div>
  );
}

// {
//     style: {
//         padding: "10px",
//         borderRadius: "5px",
//         border: "1px solid #ABABAB",
//         fontSize: "16px",
//     },

// }
export default InputBirthdate;
