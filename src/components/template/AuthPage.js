"use client";
import React, { useEffect, useState } from "react";
import SendOtpModal from "../module/SendOtpModal";
import CheckOtpModal from "../module/CheckOtpModal";
import { usePathname } from "next/navigation";
import ModalContainer from "../partials/container/ModalContainer";

function AuthPage() {
  const [modalState, setModalState] = useState("SendOtpModal");
  const [phone, setPhone] = useState({});
  const [otpCode, setOtpCode] = useState("");
  const [fail, setFail] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/login") {
      setModalState("SendOtpModal");
    }
  }, [pathname]);
  useEffect(() => {
    // if (modalState) {
    //   document.body.classList.add("no-scroll");
    // } else {
    //   document.body.classList.remove("no-scroll");
    // }
  
    // return () => {
    //   document.body.classList.remove("no-scroll");
    // };
      if (modalState) {
        window.scrollTo({ top: 0, behavior: "auto" }); 
      }
   
  }, [modalState]);
  // console.log(phone);
  return (
    <>
      {modalState === "SendOtpModal" && (
        <ModalContainer  setModalState={setModalState}>
          <SendOtpModal setModalState={setModalState} setPhone={setPhone} />
        </ModalContainer>
      )}
      {modalState === "CheckOtpModal" && (
        <ModalContainer  setModalState={setModalState}>
          <CheckOtpModal
            otpCode={otpCode}
            setOtpCode={setOtpCode}
            phone={phone}
            setModalState={setModalState}
            fail={fail}
            setFail={setFail}
          />
        </ModalContainer>
      )}
    </>
  );
}

export default AuthPage;
