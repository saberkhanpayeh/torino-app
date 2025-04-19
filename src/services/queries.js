"use client";
import api from "@/config/api";
import { getCookie } from "@/utils/cookie";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const useProfileData = (queryOptions = null) => {
  const sendData = () => {
    return api.get("user/profile");
  };
  return useQuery({
    queryKey: ["profile-info"],
    queryFn: sendData,
});
};

const useCartData = (queryOptions = null) => {
  const sendData = async() => {
    try {
      const response = await api.get('basket');
      return response;
    } catch (error) {
      // console.log("error: ",error);
      if (error.message==="سبد خرید شما خالی است") {
        
        //this code when run that the basket is Empty
        return null;  
      }
    }
  };
  return useQuery({
    queryKey: ["basket-item"],
    queryFn: sendData,
    queryOptions
  });
};

const useTransactionData = (queryOptions = null) => {
  const sendData = () => {
    return api.get("user/transactions");
  };
  return useQuery(["transaction-data"], sendData, queryOptions);
};
const useMyToursList = (queryOptions = null) => {
  const sendData = () => {
    return api.get("user/tours");
  };
  return useQuery(["my-tours-list"], sendData, queryOptions);
};
const useTourDetailsData=(id,queryOptions=null)=>{
  
  const sendData=()=>{
    return api.get(`tour/${id}`);
  }
  return useQuery(["tour-details"],sendData,queryOptions);
}
const useInvalidateQuery = () => {
  const queryClient = useQueryClient();

  const invalidateQuery = (queryKey,options={}) => {
    if (!queryKey) {
      console.error("Query key is required to invalidate the query.");
      return;
    }
    queryClient.invalidateQueries(queryKey,options);
  };

  return invalidateQuery;
};
const useForceRefetch = () => {
  const queryClient = useQueryClient();

  const refetchQuery = (queryKey) => {
    if (!queryKey) {
      console.error("Query key is required to invalidate the query.");
      return;
    }
    queryClient.refetchQueries(queryKey);
  };

  return refetchQuery;
};

export {
  useProfileData,
  useInvalidateQuery,
  useCartData,
  useTransactionData,
  useMyToursList,
  useTourDetailsData,
  useForceRefetch
};
