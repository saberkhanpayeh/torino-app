import api from "@/config/api";
async function sendOtpCode(phoneNumber) {
  try {
    const response = await api.post("auth/send-otp", phoneNumber);
    console.log(response);
    return { response };
  } catch (error) {
    return { error };
  }
}

const checkOtpCode = async (data) => {
  try {
    const response = await api.post("auth/check-otp", {...data});
    return { response };
  } catch (error) {
    return { error };
  }
};

export { sendOtpCode, checkOtpCode };
