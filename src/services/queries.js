"use client";
import api from "@/config/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useProfileData = (queryOptions=null) => {
  const sendData = () => {
    return api.get("/user/profile");
  };
  return useQuery(["profile-info"], sendData,queryOptions);
};

const useInvalidateQuery = () => {
  const queryClient = useQueryClient();

  const invalidateQuery = (queryKey) => {
    if (!queryKey) {
      console.error("Query key is required to invalidate the query.");
      return;
    }
    queryClient.invalidateQueries(queryKey);
  };

  return invalidateQuery;
};
export { useProfileData,useInvalidateQuery };
