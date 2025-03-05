import api from "@/config/api";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";

const useEditProfile = () => {
    const sendData = (data) => {
        try{
            return api.put("user/profile",data,{validateStatus: (status) => status >= 200 && status < 300});
        }catch(error){
            console.error(error);
            throw error;
            
        }

    };
    return useMutation(sendData); 
  }
const useSendOtp=()=>{
    const sendData=(data)=>{
        return api.post("auth/send-otp",data);
    }
    return useMutation(sendData);
}
const useCheckOtp=()=>{
    const sendData=(data)=>api.post("auth/check-otp",data);
    return useMutation(sendData);
}
export { useEditProfile,useCheckOtp,useSendOtp };
