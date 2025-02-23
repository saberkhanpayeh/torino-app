"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
function RedirectToLogin() {
    const router = useRouter();

  useEffect(() => {
    router.push("/login"); // تغییر مسیر به لاگین (بدون حذف از نوار آدرس)
  }, [router]);

  return null; // صفحه نیازی به نمایش چیزی ندارد
}

export default RedirectToLogin;
