"use client"
import AuthProvider from "@/components/partials/provider/AuthProvider";
import { usePathname } from "next/navigation";
import React, { Suspense, useEffect } from "react";

function DashboardLayout({ children }) {
  const pathname=usePathname()
  useEffect(()=>{
    let title="";
    switch(pathname){
      case "/dashboard/profile":title="داشبورد - پروفایل";break;
      case "/dashboard/my-tours":title="داشبورد - تور های من";break;
      case"/dashboard/transactions":title="داشبورد - تراکنش ها";break;
      default : title="تورینو | تورگردی متمایز";
    }
    document.title=title;
  },[pathname])
  return (
    <div>
      {/* <Suspense fallback={<p>...suspensLoading</p>}> */}
        <AuthProvider>{children}</AuthProvider>
      {/* </Suspense> */}
    </div>
  );
}

export default DashboardLayout;
