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

function CheckOtpModal({ otpCode, setOtpCode, phone, setModalState }) {
  const router=useRouter()
  const [input, setInput] = useState();
  const [hasError, setHasError] = useState(false);
  const [timer, setTimer] = useState({ minutes: 0, second: 0, stop: false });
  const [resetTimer, setResetTimer] = useState(false);
  const { isPending: checkOtpPending, mutate: mutateCheck, } = useCheckOtp();
  const { isPending: sendOtpPending, mutate: mutateSend } = useSendOtp();
  const invalidateQuery=useInvalidateQuery();

  useEffect(() => {
    // setResetTimer(resetTimer=>!resetTimer);
    setTimer((timer) => ({ ...timer, stop: false }));
    otpExpireTimer(setTimer);
  }, [resetTimer]);
  // console.log({ timer });
  // console.log(phone);
  const otpHandler = async (enteredOtp) => {
    setInput(enteredOtp);
    if (enteredOtp.length === 6) {
      const data = { ...phone, code: enteredOtp };
      if (checkOtpPending) return;
      mutateCheck(data, {
        onSuccess: (data) => {
          console.log(data);
          saveToLocalStorage(phone);
          setModalState("");
          router.push("/dashboard/profile");
        },
        onError: (error) => {
          console.log(error?.message);
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
    if(sendOtpPending)return;
    mutateSend(mobile, {
      onSuccess: (data) => {
        //toast send code
      },
      onError:(error)=>{
        //toast error
        console.log(error?.messaage);
      }
    });
  };
  const backHandler = () => {
    setModalState("SendOtpModal");
  };
  const loginHandler=()=>{

  }
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
         <Button onClick={loginHandler}>{checkOtpPending ?"...ورود":"ورود به تورینو"}</Button>
        ) : (
          <Button onClick={() => resendHandler(phone)}>ارسال مجدد کد</Button>
        )}
      </div>
    </div>
  );
}

export default CheckOtpModal;
