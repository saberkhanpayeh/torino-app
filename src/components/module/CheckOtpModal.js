"use client";
import React, { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";
import { otpExpireTimer } from "@/utils/timer";
import styles from "@/components/module/CheckOtpModal.module.css";
import Button from "@/components/element/Button";
import TimerOtp from "./TimerOtp";
import BackArrow from "@/components/icons/BackArrow";
import { checkOtpCode, sendOtpCode } from "@/services/auth";

function CheckOtpModal({ otpCode, setOtpCode, phone, setModalState }) {
  const [input, setInput] = useState();
  const [hasError, setHasError] = useState(false);
  const [timer, setTimer] = useState({ minutes: 0, second: 0, stop: false });
  const [resetTimer, setResetTimer] = useState(false);
  useEffect(() => {
    // setResetTimer(resetTimer=>!resetTimer);
    setTimer((timer) => ({ ...timer, stop: false }));
    otpExpireTimer(setTimer);
  }, [resetTimer]);
  // console.log({ timer });
  // console.log(phone);
  const otpHandler = async(enteredOtp) => {
    setInput(enteredOtp);
    if (enteredOtp.length === 6) {
      const data={...phone,code:enteredOtp};
      const {response,error}=await checkOtpCode(data);
      if(response){
        console.log(response);
      }
      if(error){
        console.log(error?.response?.data.messaage);
      }
    }

  };
  const resendHandler = async(mobile) => {
    setResetTimer((resetTimer) => !resetTimer);
    const { response, error } = await sendOtpCode(mobile);
    if (error) {
      console.log(error?.response?.data.messaage);
    }
  };
  const backHandler = () => {
    setModalState("SendOtpModal");
  };
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
          <Button>ورود به تورینو</Button>
        ) : (
          <Button onClick={()=>resendHandler(phone)}>ارسال مجدد کد</Button>
        )}
      </div>
    </div>
  );
}

export default CheckOtpModal;
