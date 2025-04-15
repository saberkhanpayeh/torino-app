import Image from 'next/image'
import React from 'react'
import ReserveService from '../icons/services-page/ReserveService'
import FacilitieService from '../icons/services-page/FacilitieService'
import BackupService from '../icons/services-page/BackupService'
import styles from "@/components/module/OurService.module.css"
import MoneyService from '../icons/services-page/MoneyService'
function OurService() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
      <Image src="/images/services/pic2-1.png" width={780} height={300} alt="service-image"/>
      <div className={styles.overly}>
        <div className={styles.title}>
          <h2>خدمات رفاهی تورینو</h2>
          <p>از انتخاب ما پشیمان نخواهید شد...</p>
        </div>
      </div>
      </div>
   
    <ul className={styles.cards}>
        <li><span className={styles.icon}><ReserveService/></span><div><h3>رزرو تور های بین المللی</h3><p>ما در مجموعه تورینو به افق های دوردست می اندیشیم و همواره تمام تلاش مان را کرده ایم تا مسافران و گردشگران عزیز امکان انتخاب از بین طیفی وسیع از تور های داخلی و مقاصد خارجی که نظیر آن را درجای دیگری ندیده اند داشته باشند،مشتریان ما لایق بهترین ها هستند و امیدواریم بهترین لحاظاتتان را بسازیم.</p></div></li>
        <li><span className={styles.icon}><FacilitieService/></span><div><h3>امکانات رفاهی</h3><p>بیمه های مسافرتی ،رزرو برترین اقامتگاه ها و هتل ها،خدمات مختلف ترانسفر فرودگاهی ،وسایل نقلیه اختصاصی شرکت و برنامه ریزی دقیق با ایمان داشتن به گرانبها بودن وقت گردشگران در کنارتورلیدر های ماهر و توانا بالا ترین انگیزه همگی مهیای این هستند تا شما آسوده سفر کنید.</p></div></li>
        <li><span className={styles.icon}><BackupService/></span><div><h3>پشتیبانی 24 ساعته</h3><p>تورینو یار باوفای شما متعهد به در کنارتان بود تا انتهای سفر است،سوالات شما عزیزان در هر زمینه ای توسط پشتیبان های آنلاین از طریق تماس تلفنی و سرویس چت وبسایت با صبوری پاسخ داده خواهد شد،هر زمان با مشکلی مواجه شدید کافی است اطلاع رسانی کنید تا در سریع ترین زمان ممکن برطرف شود.</p></div></li>
        <li><span className={styles.icon}><MoneyService/></span><div><h3>تسهیلات مالی و پرداختی</h3><p>سال ها مجموعه ما معتقد با ارائه با کیفیت ترین خدمات به مشتریان خاص پسند بود این روال با تلاش های شبانه روزی ما همچنان ادامه دارد،برای مشتریان جدید نیز با ارائه طرح های اقساطی و برگزاری قرعه کشی های دوره ای همچنین طرحی های امتیازی قصد داریم عملکردی کاملا رقابتی با بقیه ارائه دهیم.</p></div></li>
    </ul>
    </div>
  )
}

export default OurService