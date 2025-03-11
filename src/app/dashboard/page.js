"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Dashboard() {
  const router = useRouter();
  const pathname=usePathname();
  useEffect(() => {
    // فقط در صورتی که مسیر دقیقا "/dashboard" باشد، هدایت انجام شود
    if (pathname === "/dashboard") {
      router.replace("/"); // از replace به‌جای push استفاده کردیم
    }
  }, [router,pathname]);

  return null;
}

export default Dashboard;
