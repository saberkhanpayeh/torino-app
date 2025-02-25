const { toJalaali } = require("jalaali-js");

const getPeriodTour = (date1, date2) => {
  const ob1 = new Date(date1);
  const ob2 = new Date(date2);
 
 //calculate diffirence in milisecond unit
  const diffirence = Math.abs(ob2-ob1);

  //convert miliseconds to day
  const diffInDays = diffirence / (1000 * 60 * 60 * 24);
  return diffInDays;
};

const convertMiladiToJalali=(isoDate)=>{
  //iso date date in this format "2024-12-15T00:00:00.000Z"
    const date=new Date(isoDate);
    const {jy,jm,jd}=toJalaali(date.getFullYear(),date.getMonth()+1,date.getDate());

    //get name farsi day
    const weekDays=["شنبه","جمعه","پنج شنبه","چهارشنبه","سه شنبه","دوشنبه","یکشنبه"];
    const weekDay=weekDays[date.getDay()];

    //jalali month
    const months=["اسفند","بهمن","دی","آذر","آبان","مهر","شهریور","مرداد","تیر","خرداد","اردیبهشت","فروردین"];
    const monthName=months[jm-1];
    const highFormat=`${weekDay} ${jd} ${monthName} ${jy}`;
    const middleFormat=`${jd} ${monthName} ${jy}`;
    
    return {highFormat,middleFormat,monthName};
    
}

export {getPeriodTour,convertMiladiToJalali};
