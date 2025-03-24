"use client";
import React, { useEffect, useState } from "react";
import { DatePicker } from "zaman";
import "@/app/globals.css";
import Close from "../icons/Close";
import { DateToIso } from "@/utils/convertDate";
import styles from "@/components/element/InputSearchDate.module.css";
function InputSearchDate({ setSearchTour }) {
  const [inputDate, setInputDate] = useState("");
  const [showClose, setShowClose] = useState(false);
  useEffect(() => {
    if (inputDate) setShowClose(true);
    else setShowClose(false);
  }, [inputDate]);

  const converDateToFarsiFromat = (date) => {
    const farsiDatefromat = new Date(date).toLocaleDateString("fa-IR");
    return farsiDatefromat;
  };

  const handleDateChange = (e) => {
    // conver this date that we have get from datepicker
    // Wed Mar 05 2025 14:36:45 GMT+0330 (Iran Standard Time)
    //to this format that is utc and standard
    // 2025-03-05T11:10:19.000Z

    const startDate = DateToIso(e.from);
    const endDate = DateToIso(e.to);
    setSearchTour((searchTour) => ({ ...searchTour, startDate, endDate }));
    setInputDate(
      ` ${converDateToFarsiFromat(startDate)}-${converDateToFarsiFromat(
        endDate
      )}`
    );
  };

  // console.log(inputDate);
  // console.log(new Date(Date.now()));
  const closeHandler = () => {
    setInputDate("");
    setSearchTour((searchTour) => ({
      ...searchTour,
      startDate: "",
      endDate: "",
    }));
  };
  return (
    <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="رفت-برگشت"
          readOnly
          className={styles.dateInput}
          value={inputDate}
        />
        <DatePicker
          onChange={handleDateChange}
          defaultValue={Date.now()}
          round="x2"
          accentColor="#28A745"
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
          range
        />
      {showClose && (
        <span onClick={closeHandler} className={styles.closeBtn}>
          <Close /> پاک کردن
        </span>
      )}
      {!inputDate ? (
        <img
          src="/svg-files/calendar-search.svg"
          className={styles.calendarIcon}
          alt="calender-serach"
        />
      ) : null}
    </div>
  );
}

export default InputSearchDate;
