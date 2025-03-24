"use client";
import RotatingLineLoader from "@/components/element/RotatingLineLoader";
import { useInvalidateQuery, useProfileData } from "@/services/queries";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending, isLoading } = useProfileData();
  const userDate = useMemo(() => !!data?.data, [data]);

  useEffect(() => {
    if (!isPending && !userDate && !isLoading) router.replace("/");
  }, [isPending, isLoading, userDate]);
  if (isPending || isLoading)
    return (
      <RotatingLineLoader/>
    
    );
    // debugger;
  return children;
}

export default AuthProvider;
