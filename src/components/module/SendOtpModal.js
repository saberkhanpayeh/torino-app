"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "@/components/element/Button";
import Close from "@/components/icons/Close";
import { useRouter } from "next/navigation";
import { useSendOtp } from "@/services/mutations";
import { toast } from "react-toastify";
import { toastOptions } from "@/constant/toast";
import { p2eFormat } from "@/utils/helper";
import { mobileSchema } from "@/schema/validation";
import styles from "@/components/module/SendOtpModal.module.css";
function SendOtpModal({ setModalState, setPhone }) {
  const { isPending,isLoading, mutate } = useSendOtp();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver:yupResolver(mobileSchema),
  });
  const onSubmit = async (data) => {
    //control format of data
    const checkData={mobile:p2eFormat(data.mobile)};
    // console.log(checkData);
    setPhone(checkData);  //data is a phone number
    if (isPending) return;
    mutate(checkData, {
      onSuccess: (data) => {
        // console.log(data); //data back from server
        setModalState("CheckOtpModal");
        toast.info(data?.data?.message, {
          ...toastOptions,
          position: "top-left",
        });
        toast.success(data?.data?.code, {
          ...toastOptions,
          autoClose: 6000,
          theme: "light",
          pauseOnHover:true
        });
      },
      onError: (error) => {
        console.log(error?.messaage);
        toast.error(error?.messaage,toastOptions);
      },
    });
  };
  const closeHandler = () => {
    setModalState("");
    router.back();
  };
  return (
      <div className={styles.container}>
        <div onClick={closeHandler} className={styles.svg}>
          <Close />
        </div>
        <p>ورود به تورینو</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="mobile">شماره موبایل خود را وارد کنید</label>
          <input {...register("mobile")} placeholder="0933***3319" />
          {errors?.mobile && <span className={styles.error}>*{errors?.mobile.message}</span>}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "در حال ارسال کد..." : "ارسال کد تایید"}
          </Button>
        </form>
      </div>
  );
}

export default SendOtpModal;
