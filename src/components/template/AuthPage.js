"use client";
import React, { useEffect, useState } from "react";
import SendOtpModal from "../module/SendOtpModal";
import CheckOtpModal from "../module/CheckOtpModal";
import { usePathname } from "next/navigation";

function AuthPage() {
  const [modalState, setModalState] = useState("SendOtpModal");
  const [phone, setPhone] = useState({});
  const [otpCode, setOtpCode] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/login") setModalState("SendOtpModal");
  }, [pathname]);
  console.log(phone);
  return (
    <div>
      {modalState === "SendOtpModal" && (
        <SendOtpModal setModalState={setModalState} setPhone={setPhone} />
      )}
      {modalState === "CheckOtpModal" && (
        <CheckOtpModal
          otpCode={otpCode}
          setOtpCode={setOtpCode}
          phone={phone}
          setModalState={setModalState}
        />
      )}
    </div>
  );
}

export default AuthPage;
