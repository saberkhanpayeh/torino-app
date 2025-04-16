"use client";
import React, { useEffect } from "react";
import PhoneContact from "../icons/contact-us-page/PhoneContact";
import LocationContact from "../icons/contact-us-page/LocationContact";
import MessageContact from "../icons/contact-us-page/MessageContact";
import Image from "next/image";
import styles from "@/components/module/ContactUs.module.css";
function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.contact} id="contact-top">
        <div className={styles.image}>
          <Image
            src="/images/contact-us/pic-phone.png"
            width={300}
            height={300}
            alt="picture-phone"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.title}>
            <h2>تماس با ما</h2>
            <p>
              سوال یا درخواستی دارید؟ در همه‌ی روزهای هفته و در هر ساعت از
              شبانه‌روز که بخواهید، می‌توانید از طریق راه‌های زیر با ما ارتباط
              بگیرید.
            </p>
          </div>
          <ul>
            <li>
              <div>
                <PhoneContact />
                <p>تلفن پشتیبانی</p>
              </div>
              <span dir="ltr"> 021 - 439 00000 </span>
            </li>
            <li>
              <div>
                <MessageContact />
                <p>پست الکترونیک</p>
              </div>
              <span>support@torino.ir</span>
            </li>
            <li>
              <div>
                <LocationContact />
                <p>آدرس دفتر پشتیبانی</p>
              </div>
              <span>
                اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست
                گل‌ها، پلاک ۱
              </span>
              <span>کد پستی: ۱۳۹۳۷۳۳۶۹۱</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.social} id="contact-social">
        <h3>ما را در شبکه های اجتماعی دنبال کنید !</h3>
        <ul>
          <li>
            <Image
              src="/images/contact-us/image-icons/instagram.png"
              width={64}
              height={64}
              alt="instagram-picture"
            />
            <p>لینک اینستاگرام</p>
          </li>
          <li>
            <Image
              src="/images/contact-us/image-icons/facebook.png"
              width={64}
              height={64}
              alt="facebook-picture"
            />
            <p>لینک فیسبوک</p>
          </li>
          <li>
            <Image
              src="/images/contact-us/image-icons/telegram.png"
              width={64}
              height={64}
              alt="telegram-picture"
            />
            <p>لینک تلگرام</p>
          </li>
          <li>
            <Image
              src="/images/contact-us/image-icons/twitter.png"
              width={64}
              height={64}
              alt="twitter-picture"
            />
            <p>لینک شبکه ایکس</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
