"use client";
import React, { useEffect, useState } from "react";
import SendOtpModal from "../module/SendOtpModal";
import CheckOtpModal from "../module/CheckOtpModal";
import { usePathname } from "next/navigation";

function AuthPage() {
  const [modalState, setModalState] = useState("SendOtpModal");
  const [phone, setPhone] = useState({});
  const [otpCode, setOtpCode] = useState("");
  const [fail,setFail]=useState(0);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/login") {
      setModalState("SendOtpModal");
    //   document.body.style.overflow = "hidden";
    //   return () => {
    //     document.body.style.overflow = "auto";
    // };
    }
  }, [pathname]);
  console.log(phone);
  return (
    <>
      {modalState === "SendOtpModal" && (
        <SendOtpModal setModalState={setModalState} setPhone={setPhone} />
      )}
      {modalState === "CheckOtpModal" && (
        <CheckOtpModal
          otpCode={otpCode}
          setOtpCode={setOtpCode}
          phone={phone}
          setModalState={setModalState}
          fail={fail}
          setFail={setFail}
        />
      )}
    </>
  );
}

export default AuthPage;
