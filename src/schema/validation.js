import * as yup from "yup";
const mobileSchema = yup.object({
  mobile: yup
    .string()
    .required("کاربر گرامی شماره موبایل الزامی است!")
    .matches(/^(\+98|0)?9\d{9}$/, "مقدار وارد شده مجاز نمی باشد"),
});
const isNumericString = (str) => /^[0-9]+$/.test(str);

const profileSchema = yup.object().shape({
  account: yup.object().shape({
    email: yup
      .string()
      .email("ایمیل معتبر نیست!")
      .required("ایمیل الزامی است!"),
  }),
  personal: yup.object().shape({
    fullName: yup
      .string()
      .required("نام و نام خانوادگی الزامی است!")
      .min(5, "مقدار وارد شده نامعتبر است!"),
    nationalCode: yup
      .string()
      .required("کد ملی الزامی است!")
      .length(10, "تعداد ارقام غیر مجاز!")
      .matches(/^[0-9]+$/, "کدملی نامعتبر!"),
    gender: yup.string().required("مقدار جنسیت الزامی است!"),
     birthDate: yup.date().nullable().required("تاریخ تولد الزامی است!"),
  }),
  bank: yup.object().shape({
    shaba_code: yup.string().required("شماره شبا الزامی است!"),
    debitCard_code: yup
      .string()
      .required("شماره کارت الزامی است!")
      .length(16, "تعداد ارقام وارد شده مجاز نیست!")
      .matches(/^[0-9]+$/, "شماره کارت بانکی نامعتبر!"),
    accountIdentifier: yup
      .string()
      .required("شماره حساب الزامی است!")
      .length(8, "تعداد ارقام خارج از بازه مجاز!")
      .matches(/^[0-9]+$/, "شماره حساب نامعتبر است!"),
  }),
});

export { mobileSchema, isNumericString, profileSchema };
