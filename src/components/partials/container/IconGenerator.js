"use client";
import ConvertCard from "@/components/icons/ConvertCard";
import Profile from "@/components/icons/Profile";
import SunFogBold from "@/components/icons/SunFogBold";
import React, { useMemo } from "react";

const icons = [Profile, SunFogBold, ConvertCard];
function IconGenerator({ index }) {
  const IconComponent = useMemo(() => {
    return icons[index];
  }, [index]);
  return <IconComponent />;
}

export default IconGenerator;
