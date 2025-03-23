import * as yup from "yup";
const mobileSchema = yup.object({
  mobile: yup
    .string()
    .required("کاربر گرامی شماره موبایل الزامی است!")
    .matches(/^(\+98|0)?9\d{9}$/, "مقدار وارد شده مجاز نمی باشد"),
});
const isNumericString = (str) => /^[0-9]+$/.test(String(str || ""));

const account = yup.object({
  email: yup
    .string()
    .default("")
    .email("ایمیل معتبر نیست!")
    .required("ایمیل الزامی است!"),
});
const personal = yup.object({
  fullName: yup
    .string()
    .default("")
    .required("نام و نام خانوادگی الزامی است!")
    .min(5, "مقدار وارد شده نامعتبر است!"),
  nationalCode: yup
    .string()
    .default("")
    .required("کد ملی الزامی است!")
    .length(10, "تعداد ارقام غیر مجاز!")
    .matches(/^[0-9]+$/, "کدملی نامعتبر!"),
  gender: yup.string().required("مقدار جنسیت الزامی است!"),
  birthDate: yup
    .string()
    .default("")
    .required("تاریخ تولد الزامی است!"),
});
const bank = yup.object({
  shaba_code: yup
    .string()
    .default("")
    .required("شماره شبا الزامی است!"),
  debitCard_code: yup
    .string()
    .default("")
    .required("شماره کارت الزامی است!")
    .length(16, "تعداد ارقام وارد شده مجاز نیست!")
    .matches(/^[0-9]+$/, "شماره کارت بانکی نامعتبر!"),
  accountIdentifier: yup
    .string()
    .default("")
    .required("شماره حساب الزامی است!")
    .length(8, "تعداد ارقام خارج از بازه مجاز!")
    .matches(/^[0-9]+$/, "شماره حساب نامعتبر است!"),
});
const profileSchema = yup.object({
  account: yup.object({
    email: yup
      .string()
      .transform((value) => (value ? String(value) : ""))
      .email("ایمیل معتبر نیست!")
      .required("ایمیل الزامی است!"),
  }),
  personal: yup.object({
    fullName: yup
      .string()
      .transform((value) => (value ? String(value) : ""))
      .required("نام و نام خانوادگی الزامی است!")
      .min(5, "مقدار وارد شده نامعتبر است!"),
    nationalCode: yup
      .string()
      .transform((value) => (value ? String(value) : ""))
      .required("کد ملی الزامی است!")
      .length(10, "تعداد ارقام غیر مجاز!")
      .matches(/^[0-9]+$/, "کدملی نامعتبر!"),
    gender: yup.string().required("مقدار جنسیت الزامی است!"),
    birthDate: yup
      .string()
      .transform((value) => (value ? String(value) : ""))
      .required("تاریخ تولد الزامی است!"),
  }),
  bank: yup.object({
    shaba_code: yup
      .string()
      .transform((value) => (value ? String(value) : ""))
      .required("شماره شبا الزامی است!"),
    debitCard_code: yup
      .string()
      .transform((value) => (value ? String(value) : ""))
      .required("شماره کارت الزامی است!")
      .length(16, "تعداد ارقام وارد شده مجاز نیست!")
      .matches(/^[0-9]+$/, "شماره کارت بانکی نامعتبر!"),
    accountIdentifier: yup
      .string()
      .transform((value) => (value ? String(value) : ""))
      .required("شماره حساب الزامی است!")
      .length(8, "تعداد ارقام خارج از بازه مجاز!")
      .matches(/^[0-9]+$/, "شماره حساب نامعتبر است!"),
  }),
});

const getSchema = (section) => {
  switch (section) {
    case "accountInfo":
      return yup.object().shape({
        account: yup.object().shape({
          email: yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
        }),
      });

    case "personalInfo":
      return yup.object().shape({
        personal: yup.object().shape({
          fullName: yup.string().required("نام و نام خانوادگی الزامی است").min(5, "مقدار وارد شده نامعتبر است!"),
          nationalCode: yup.string().required("کد ملی الزامی است").length(10, "کد ملی باید ۱۰ رقم باشد").matches(/^[0-9]+$/, "کدملی نامعتبر!"),
          gender: yup.string().required("لطفا جنسیت را انتخاب کنید"),
          birthDate: yup.string().required("تاریخ تولد الزامی است"),
        }),
      });

    case "creaditInfo":
      return yup.object().shape({
        bank: yup.object().shape({
          shaba_code: yup.string().required("شماره شبا الزامی است").matches(/^IR\d+$/, "شماره شبا نا معتبر است"),
          debitCard_code: yup.string().required("شماره کارت الزامی است").matches(/^\d{16}$/, "شماره کارت باید ۱۶ رقم باشد"),
          accountIdentifier: yup.string().required("شماره حساب الزامی است").matches(/^[0-9]+$/, "شماره حساب نامعتبر است!"),
        }),
      });

    default:
      return yup.object();
  }
};
export { mobileSchema, isNumericString, getSchema, profileSchema };
