"use client";
import { sendOtpCode } from "@/services/auth";
import { otpExpireTimer } from "@/utils/timer";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/components/module/SendOtpModal.module.css";
import Button from "@/components/element/Button";
import Close from "@/components/icons/Close";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { saveToLocalStorage } from "@/utils/localstorage";
function SendOtpModal({ setModalState, setPhone }) {
  //   useEffect(() => {
  //     otpExpireTimer();
  //   }, []);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const { response, error } = await sendOtpCode(data);
    if (response) {
      setPhone(data);
      setModalState("CheckOtpModal");
      saveToLocalStorage(data);
    }
    if (error) {
      console.log(error?.response?.data.messaage);
    }
  };
  const closeHandler = () => {
   // localStorage.clear();
    setModalState("");
    router.push("/");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div onClick={closeHandler} className={styles.svg}>
          <Close />
        </div>
        <p>ورود به تورینو</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="mobile">شماره موبایل خود را وارد کنید</label>
          <input {...register("mobile")} placeholder="0933***3319" />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "در حال ارسال کد..." : "ارسال کد تایید"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SendOtpModal;
