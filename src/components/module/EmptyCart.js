import React from "react";
import styles from "@/components/module/EmptyCart.module.css"
import Image from "next/image";
function EmptyCart() {
  return <div className={styles.container}>
    <div className={styles.title}>
        <h3>سبد خرید شما خالی است!</h3>
    </div>
    <Image src="/images/empty-cart.png" width={150} height={150} alt="cart-image" />
  </div>;
}

export default EmptyCart;
