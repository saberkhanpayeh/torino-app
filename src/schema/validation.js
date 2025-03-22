import * as yup from "yup";
const mobileSchema = yup.object({
  mobile: yup
    .string()
    .required("کاربر گرامی شماره موبایل الزامی است!")
    .matches(/^(\+98|0)?9\d{9}$/, "مقدار وارد شده مجاز نمی باشد"),
});
const isNumericString = (str) => /^[0-9]+$/.test(String(str || ""));


  const accountSchema=yup.object({
    email: yup
      .string()
      .transform((value) => (value ? String(value) : ""))
      .email("ایمیل معتبر نیست!")
      .required("ایمیل الزامی است!"),
  })
  const personalSchema=yup.object({
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
  })
  const bankSchema= yup.object({
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
  })

const getSchema=(section)=>{
  const schemas={
    personalInfo:personalSchema,
    accountInfo:accountSchema,
    creaditInfo:bankSchema,
  };
  console.log(schemas[section])
  return schemas[section] || yup.object({});
}
export { mobileSchema, isNumericString,getSchema };
