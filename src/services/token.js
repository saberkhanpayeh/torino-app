import { getCookie } from "@/utils/cookie";
import axios from "axios";

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
      { refreshToken }
    );
    return { response };
  } catch (error) {
    return { error };
  }
};

export { getNewTokens };
