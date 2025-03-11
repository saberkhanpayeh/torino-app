"use client";
import { useInvalidateQuery, useProfileData } from "@/services/queries";
import { getCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending,isLoading } = useProfileData();
  const userDate=useMemo(()=>!!data?.data,[data]);

  useEffect(() => {
   
    if (!isPending && !userDate &&!isLoading) router.replace("/");
  }, [isPending,isLoading,userDate]);
  if (isPending||isLoading) return <p>Loading....</p>;
  return children;
}

export default AuthProvider;
