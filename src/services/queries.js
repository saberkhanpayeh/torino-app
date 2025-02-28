"use client";
import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";

const useProfileData = (queryOptions=null) => {
  const sendData = () => {
    return api.get("/user/profile");
  };
  return useQuery(["profile-info"], sendData,queryOptions);
};

export { useProfileData };
