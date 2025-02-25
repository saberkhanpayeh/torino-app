import React from "react";
import styels from "@/components/module/Attributes.module.css";
import Image from "next/image";
function Attributes() {
  return (
    // <div className={styels.wrraper}>
      <div className={styels.container}>
        <figure>
          <Image
            src="/images/glass-ticket.png"
            width={121.42}
            height={109.03}
          />
          <div className={styels.detail}>
            <h4>بصرفه ترین قیمت</h4>
            <figcaption>
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </figcaption>
          </div>
        </figure>
        <figure>
          <Image
            src="/images/glass-message.png"
            width={109.03}
            height={99.12}
          />
          <div className={styels.detail}>
            <h4>پشتیبانی</h4>
            <figcaption>
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
            </figcaption>
          </div>
        </figure>

        <figure>
          <Image src="/images/glass-heart.png" width={104.08} height={104.08} />
          <div className={styels.detail}>
            <h4>رضایت کاربران</h4>
            <figcaption>رضایت بیش از 10هزار کاربر از تور های ما.</figcaption>
          </div>
        </figure>
      </div>
    // </div>
  );
}

export default Attributes;
