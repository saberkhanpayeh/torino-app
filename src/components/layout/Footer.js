import Image from "next/image";
import Link from "next/link";
import React from "react";
import SiteLogo from "@/components/element/SiteLogo";
import styles from "@/components/layout/Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.firstSection}>
        <div className={styles.rightContainer}>
        <article className={styles.torino}>
          <h3>تورینو</h3>
          <ul>
            <li><Link href="/about-us">درباره ما</Link></li>
            <li><Link href="/contact-us">تماس با ما</Link></li>
            <li><Link href="/#why-torino">چرا تورینو</Link></li>
            <li><Link href="/">بیمه مسافرتی</Link></li>
          </ul>
        </article>
        <article className={styles.khadamat}> 
          <h3>خدمات مشتریان</h3>
          <ul>
            <li><Link href="/">پشتیبانی آنلاین</Link></li>
            <li><Link href="/">راهنمای خرید</Link></li>
            <li><Link href="/">راهنمای استرداد</Link></li>
            <li><Link href="/">پرسش و پاسخ</Link></li>
          </ul>
        </article>
        </div>
        <div className={styles.leftContainer}>
        <div className={styles.top}>
            <SiteLogo />
            <p dir="ltr">
              <span className={styles.number}>021-8574</span> :<span className={styles.text}>تلفن پشتیبانی</span>
            </p>
          </div>
          <article>
            <ul>
              <li>
                <Link href="/">
                  <Image
                    src="/images/sazman-havapiyma.png"
                    width={78}
                    height={74}
                    alt="footer-png"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/images/passenger-rights.png"
                    width={71}
                    height={74}
                    alt="footer-png"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/images/qrcode.png"
                    width={68}
                    height={74}
                    alt="footer-png"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/images/samandehi.png"
                    width={67}
                    height={74}
                    alt="footer-png"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/images/nerkhe-blit.png"
                    width={68}
                    height={74}
                    alt="footer-png"
                  />
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <div className={styles.secondSection}>
        <p>کلیه حقوق این وب سایت متعلق به تورینو می باشد.</p>
      </div>
    </footer>
  );
}

export default Footer;
