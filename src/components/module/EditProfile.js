"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import styles from "@/components/module/EditProfile.module.css";
import { useForm } from "react-hook-form";
import { useInvalidateQuery, useProfileData } from "@/services/queries";
import {  useSearchParams } from "next/navigation";
import { splitByFirstSpace, validationSchemas } from "@/utils/helper";
import { useEditProfile } from "@/services/mutations";
import { Calendar, CalendarProvider, DatePicker } from "zaman";
import InputBirthdate from "../element/InputBirthdate";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { toastOptions } from "@/constant/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@/schema/validation";


function EditProfile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [section,setSection]=useState("");
  const [birth, setBirthDate] = useState("");
  const [birtError,setBirthError]=useState(false);
  const { mutate } = useEditProfile();
  const invalidateQuery = useInvalidateQuery();
  const queryOptions = {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  };
  const { data, error, isLoading, isError, isFetching } =
    useProfileData(queryOptions);

  const userProfile = data?.data;
  const bankInfo = userProfile?.payment;

  const userCurrentData = userProfile || {
    fullName: "",
    nationalCode: "",
    gender: "",
    email: "",
  };
  const bankCurrentData = bankInfo || {
    shaba_code: "",
    debitCard_code: "",
    accountIdentifier: "",
  };
  //   console.log(userProfile);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver:yupResolver(profileSchema),
  });
//  console.log(birtError);

  useEffect(()=>{
    const section = searchParams.get("section")||"";
    setSection(section);
    console.log(section)
  },[searchParams]);
  useEffect(() => {
    reset({
      account: userCurrentData,
      personal: userCurrentData,
      bank: bankCurrentData,
    });
  }, [userProfile, bankInfo, reset]);

  const onSubmit = (data, formType) => {
    // if(birth)
    //   setBirthError(false)
    // else
    // setBirthError(true);
    // console.log(data);
    if (formType === "account") {
      const { account } = data;
      const newAccountEmail = { ...userProfile, ...account };
      console.log(newAccountEmail);
      mutate(newAccountEmail, {
        onSuccess: (data) => {
          console.log(data?.data?.message);
          toast.success("ایمیل شما با موفقیت بروزرسانی شد",toastOptions);
          navigateToProfile();
        },
        onError: (error) => {
          console.log(error?.message);
          toast.error(error?.message,toastOptions);
        },
      });
    }
    if (formType === "personal") {
      if (!birth) {
        // window.alert("enter date");
        // show toast
        setBirthError(true);
        return;
      }
      console.log(data.personal);
      const { personal } = data;
      const [firstName, lastName] = splitByFirstSpace(personal.fullName);
      const newUserProfile = {
        ...userProfile,
        ...personal,
        firstName,
        lastName,
        birthDate: birth,
      };
      console.log(newUserProfile);
      mutate(newUserProfile, {
        onSuccess: (data) => {
          console.log(data?.data?.message);
          toast.success("اطلاعات شخصی شما بروزرسانی شد",toastOptions);
          navigateToProfile();
        },
        onError: (error) => {
          console.log(error?.message);
          toast.error(error?.message,toastOptions);
        },
      });
    }
    if (formType === "bank") {
      console.log(data.bank);
      const { bank } = data;
      const newBankInfo = { ...userProfile, payment: bank };
      console.log(newBankInfo);
      mutate(newBankInfo, {
        onSuccess: (data) => {
          console.log(data?.data?.message);
          toast.success("اطلاعات بانکی شما با موفقیت بروزرسانی شد",toastOptions);
          navigateToProfile();
        },
        onError: (error) => {
          console.log(error);
          toast.error(error?.message,toastOptions);
        },
      });
    }
  };
  
  const navigateToProfile=()=>{
    invalidateQuery(["profile-info"]);
    router.push("/dashboard/profile");
  }
  return (
    <div className={styles.container}>
      <div className={section==="accountInfo"? `${styles.account}`:`${styles.account} ${styles.disable}`}>
        <h3>اطلاعات حساب کاربری</h3>
        <div className={styles.emailForm}>
          <p>
            شماره موبایل<span>{userProfile?.mobile}</span>
          </p>
          <form id="accountForm">
            <fieldset>
              <div className={styles.inputContainer}>
                <label htmlFor="account.email">آدرس ایمیل</label>
              <input {...register("account.email")} placeholder="آدرس ایمیل" disabled={section!=="accountInfo"&&"disable"} />
              {errors?.account?.email &&section==="accountInfo"&& <span>*{errors?.account?.email?.message}</span>}
              </div>
              <button
                type="button"
                onClick={handleSubmit((data) => onSubmit(data, "account"))}
              >
                تایید
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className={section==="personalInfo"? `${styles.personal}`:`${styles.personal} ${styles.disable}`}>
        <div className={styles.topPersonal}>
          <h3>اطلاعات شخصی</h3>
          <form id="personalForm">
            <fieldset>
              <div className={styles.inputContainer}>
                <label htmlFor="personal.fullName">نام و نام خانوادگی</label>
              <input
                {...register("personal.fullName")}
                placeholder="نام و نام خانوادگی"
                disabled={section!=="personalInfo"&&"disable"} 
              />
              {errors?.personal?.fullName && section==="personalInfo" &&<span className={styles.error}>*{errors?.personal?.fullName?.message}</span>}
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="personal.nationalCode">کدملی</label>
              <input
                {...register("personal.nationalCode")}
                placeholder="کد ملی"
                disabled={section!=="personalInfo"&&"disable"} 
              />
              {errors?.personal?.nationalCode &&section==="personalInfo" && <span className={styles.error}>*{errors?.personal?.nationalCode?.message}</span>}
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="date">تاریخ تولد</label>
              <InputBirthdate
                setBirthDate={setBirthDate}
                initialValue={userProfile?.birthDate}
              />
              { birtError && section==="personalInfo" ? <span className={styles.error}>مقدار تاریخ تولد الزامی است!</span>:null}
              </div>

              <div className={styles.selectOption}>
                <label>جنسیت</label>
                <select {...register("personal.gender")}>
                  <option value="">انتخاب</option>
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
                <img
                  src="/svg-files/arrow-down.svg"
                  alt="arrow"
                />
                {errors?.personal?.gender && section==="personalInfo" && <span className={styles.genderError} >*{errors?.personal?.gender?.message}</span>}
              </div>
            </fieldset>
          </form>
        </div>
        <div className={section==="personalInfo"? `${styles.footerBtn}`:`${styles.footerBtn} ${styles.disableBtn}`}>
          <button
            type="button"
            onClick={handleSubmit((data) => onSubmit(data, "personal"))}
            className={styles.select}
          >
            تایید
          </button>
          <button onClick={()=>router.push("/dashboard/profile")}>انصراف</button>
        </div>
      </div>
      <div className={section==="creaditInfo"? `${styles.bank}`:`${styles.bank} ${styles.disable}`}>
        <div className={styles.topBank}>
        <h3>اطلاعات حساب بانکی</h3>
        <form id="bankForm">
          <fieldset>
            <div className={styles.inputContainer}>
            <label htmlFor="bank.shaba_code">شماره شبا</label>
            <input {...register("bank.shaba_code")} placeholder="شماره شبا" disabled={section!=="creaditInfo"&&"disable"} />
            {errors?.bank?.shaba_code && section==="creaditInfo" && <span className={styles.error} >*{errors?.bank?.shaba_code?.message}</span>}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="bank.debitCard_code">شماره کارت</label>
            <input
              {...register("bank.debitCard_code")}
              placeholder="شماره کارت"
              disabled={section!=="creaditInfo"&&"disable"}
            />
            {errors?.bank?.debitCard_code && section==="creaditInfo" && <span className={styles.error} >*{errors?.bank?.debitCard_code?.message}</span>}
            </div>
              <div className={styles.inputContainer}>
                <label htmlFor="bank.accountIdentifier">شماره حساب</label>
                <input
              placeholder="شماره حساب"
              {...register("bank.accountIdentifier")}
              disabled={section!=="creaditInfo"&&"disable"}
            />
            {errors?.bank?.accountIdentifier && section==="creaditInfo" && <span className={styles.error} >*{errors?.bank?.accountIdentifier?.message}</span>}
              </div>
          </fieldset>
        </form>
        </div>
        <div className={section==="creaditInfo"? `${styles.footerBtn}`:`${styles.footerBtn} ${styles.disableBtn}`}>
          <button
            type="button"
            onClick={handleSubmit((data) => onSubmit(data, "bank"))}
            className={styles.select}
          >
            تایید
          </button>
          <button onClick={()=>router.push("/dashboard/profile")}>انصراف</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
