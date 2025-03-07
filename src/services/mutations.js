import api from "@/config/api";
import { setCookie } from "@/utils/cookie";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";

const useEditProfile = () => {
  const sendData = (data) => {
    return api.put("user/profile", data);
  };
  return useMutation(sendData);
};
const useSendOtp = () => {
  const sendData = (data) => {
    return api.post("auth/send-otp", data);
  };
  return useMutation(sendData);
};
const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["profile-info"] });
  };
  return useMutation({ mutationFn, onSuccess });
};
const useAddTocCart = () => {
  const sendData = (id) => {
    return api.put(`basket/${id}`);
  };
  return useMutation(sendData);
};
const useCreateOrder = () => {
  const sendDate = (data) => {
    return api.post(`order`, data);
  };
  return useMutation(sendDate);
};
export { useEditProfile, useCheckOtp, useSendOtp, useAddTocCart,useCreateOrder };
