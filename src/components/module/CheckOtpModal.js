"use client";
import React, { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";
import { otpExpireTimer } from "@/utils/timer";
import styles from "@/components/module/CheckOtpModal.module.css";
import Button from "@/components/element/Button";
import TimerOtp from "./TimerOtp";
import BackArrow from "@/components/icons/BackArrow";
import { checkOtpCode, sendOtpCode } from "@/services/auth";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localstorage";
import { setCookie } from "@/utils/cookie";
import { useCheckOtp, useSendOtp } from "@/services/mutations";
import { useRouter } from "next/navigation";
import { useInvalidateQuery } from "@/services/queries";
import { toast } from "react-toastify";
import { toastOptions } from "@/constant/toast";

function CheckOtpModal({
  otpCode,
  setOtpCode,
  phone,
  setModalState,
  fail,
  setFail,
}) {
  const router = useRouter();
  const [input, setInput] = useState();
  const [hasError, setHasError] = useState(false);
  const [timer, setTimer] = useState({ minutes: 0, second: 0, stop: false });
  const [resetTimer, setResetTimer] = useState(false);
  const { isPending: checkOtpPending, mutate: mutateCheck } = useCheckOtp();
  const { isPending: sendOtpPending, mutate: mutateSend } = useSendOtp();
  const invalidateQuery = useInvalidateQuery();

  useEffect(() => {
    // setResetTimer(resetTimer=>!resetTimer);
    setTimer((timer) => ({ ...timer, stop: false }));
    otpExpireTimer(setTimer);
  }, [resetTimer]);
  // console.log({ timer });
  // console.log(phone);
  const otpHandler = async (enteredOtp) => {
    setInput(enteredOtp);
    // console.log(phone);
    if (enteredOtp.length === 6) {
      const data = { ...phone, code: enteredOtp };
      if (fail >= 2) {
        toast.warning(
          "شما بیش از حدمجاز تلاش کرده اید مطمئن شوید که شماره تلفن تان صحیح است",
          { ...toastOptions, autoClose: 4000 }
        );
        setFail(0);
        setModalState("SendOtpModal");
      }
      if (checkOtpPending) return;
      mutateCheck(data, {
        onSuccess: (data) => {
          console.log(data);
          saveToLocalStorage(phone);
          setModalState("");
          toast.success("ورود شما موفقیت آمیز بود", toastOptions);
          router.push("/dashboard/profile");
        },
        onError: (error) => {
          console.log(error?.message);
          setFail((fail) => fail + 1);
          toast.error(error?.message, toastOptions);
        },
      });
      // if(response){
      //   saveToLocalStorage(phone);
      //   setCookie("accessToken",response?.data?.accessToken,30);
      //   setCookie("refreshToken",response.data.refreshToken,365);
      // }
    }
  };
  const resendHandler = async (mobile) => {
    setInput("");
    setResetTimer((resetTimer) => !resetTimer);
    if (sendOtpPending) return;
    mutateSend(mobile, {
      onSuccess: (data) => {
        //toast send code
        toast.info(data?.data?.message, {
          ...toastOptions,
          position: "top-left",
        });
        toast.success(data?.data?.code, {
          ...toastOptions,
          autoClose: 6000,
          theme: "light",
          pauseOnHover: true,
        });
      },
      onError: (error) => {
        //toast error
        console.log(error?.messaage);
        toast.error(error?.messaage,toastOptions);
      },
    });
  };
  const backHandler = () => {
    setModalState("SendOtpModal");
  };
  const loginHandler = () => {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.svg} onClick={backHandler}>
          <BackArrow />
        </div>
        <h2>کد تایید را وارد کنید.</h2>
        <p className={styles.title}>
          کد تایید به شماره <span className={styles.phone}>{phone.mobile}</span>
          ارسال شد
        </p>
        <OtpInput
          value={input}
          onChange={otpHandler}
          numInputs={6}
          containerStyle={styles.otpContainer} //style for OtpInput container
          inputStyle={`${styles.otpInput} ${
            timer.stop ? styles.disabledOtpInput : null
          }`} //style for each input
          isDisabled={timer.stop ? true : false}
        />
        <TimerOtp timer={timer} />
        {!timer.stop ? (
          <Button onClick={loginHandler}>
            {checkOtpPending ? "...ورود" : "ورود به تورینو"}
          </Button>
        ) : (
          <Button onClick={() => resendHandler(phone)}>ارسال مجدد کد</Button>
        )}
      </div>
    </div>
  );
}

export default CheckOtpModal;
