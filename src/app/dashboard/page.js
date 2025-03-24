"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Dashboard() {
  const router = useRouter();
  const pathname=usePathname();
  useEffect(() => {
    if (pathname === "/dashboard") {
      router.replace("/"); 
    }
  }, [router,pathname]);

  return null;
}

export default Dashboard;
