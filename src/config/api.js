import { getNewTokens } from "@/services/token";
import { getCookie, setCookie } from "@/utils/cookie";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  return response;
},async (error)=>{
  const originalRequest=error.config;
  if(error.response.status===403 && !originalRequest._retry){
    originalRequest._retry=true;
    const res=await getNewTokens();
    if(res?.response?.status===200) {
      setCookie("accessToken",res?.response?.data?.accessToken,30);
      return api(originalRequest);
    }
    else{
      setCookie("accessToken","",0);
      setCookie("refreshToken","",0);
    }
  }
  return Promise.reject(error?.response?.data);
});

export default api;