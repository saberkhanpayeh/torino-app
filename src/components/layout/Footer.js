import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <article>
          <h3>تورینو</h3>
          <ul>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>چرا تورینو</li>
            <li>بیمه مسافرتی</li>
          </ul>
        </article>
        <article>
          <h3>خدمات مشتریان</h3>
          <ul>
            <li>پشتیبانی آنلاین</li>
            <li>راهنمای خرید</li>
            <li>راهنمای استرداد</li>
            <li>پرسش و پاسخ</li>
          </ul>
        </article>
        <div>
            <article>
            <ul>
                <li><Link href="/"><Image src="/images/sazman-havapiyma.png" width={78} height={74} alt="footer-png"/></Link></li>
                <li><Link href="/"><Image src="/images/passenger-rights.png" width={71} height={74} alt="footer-png"/></Link></li>
                <li><Link href="/"><Image src="/images/qrcode.png" width={68} height={74} alt="footer-png"/></Link></li>
                <li><Link href="/"><Image src="/images/samandehi.png" width={67} height={74} alt="footer-png"/></Link></li>
                <li><Link href="/"><Image src="/images/nerkhe-blit.png" width={68} height={74} alt="footer-png"/></Link></li>
            </ul>
            </article>
            <div>
                <Image />
                <p dir="ltr"><span>021-8574</span> :<span>تلفن پشتیبانی</span></p>
            </div>
        </div>
 
      </div>
      <div>
        <p>کلیه حقوق این وب سایت متعلق به تورینو می باشد.</p>
      </div>
    </footer>
  );
}

export default Footer;
