import { e2pFormat } from "./helper";

const { toJalaali } = require("jalaali-js");

const getPeriodTour = (date1, date2) => {
  const ob1 = new Date(date1);
  const ob2 = new Date(date2);

  //calculate diffirence in milisecond unit
  const diffirence = Math.abs(ob2 - ob1);

  //convert miliseconds to day
  const diffInDays = diffirence / (1000 * 60 * 60 * 24);
  return diffInDays;
};
const getTourStatus = (endTourData) => {
  const todayDate = new Date(Date.now());
  const endDate = new Date(endTourData);
  const diffirence = todayDate - endDate;
  // convert dates to form bellow
  // {todayDate: Sat Mar 08 2025 04:33:20 GMT+0330 (Iran Standard Time), endDate: Thu Dec 25 2025 03:30:00 GMT+0330 (Iran Standard Time), diffirence: -25224999413}
  if (diffirence > 0) {
    // console.log("etmam");
    return false;
  }
  if (diffirence <= 0) {
    // console.log("bargozari");
    return true;
  }
};
const convertMiladiToJalali = (isoDate) => {
  //iso date date in this format "2024-12-15T00:00:00.000Z"
  const date = new Date(isoDate);
  const { jy, jm, jd } = toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );

  //get name farsi day
  const weekDays = [
    "شنبه",
    "جمعه",
    "پنج شنبه",
    "چهارشنبه",
    "سه شنبه",
    "دوشنبه",
    "یکشنبه",
  ];
  const weekDay = weekDays[date.getDay()];

  //jalali month
  const months = [
    "اسفند",
    "بهمن",
    "دی",
    "آذر",
    "آبان",
    "مهر",
    "شهریور",
    "مرداد",
    "تیر",
    "خرداد",
    "اردیبهشت",
    "فروردین",
  ];
  const monthName = months[jm - 1];
  const highFormat = `${weekDay} ${e2pFormat(jd)} ${monthName} ${e2pFormat(jy)}`;
  const middleFormat = `${e2pFormat(jd)} ${monthName} ${e2pFormat(jy)}`;

  return { highFormat, middleFormat, monthName };
};
const DateToIso=(farsiDate)=>new Date(farsiDate).toISOString();

export { getPeriodTour, convertMiladiToJalali, getTourStatus,DateToIso };
