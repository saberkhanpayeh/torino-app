import api from "@/config/api";
import { useMutation } from "@tanstack/react-query";

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
export { useEditProfile };
