"use client"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/components/module/PersonalForm.module.css";
import InputBirthdate from "../element/InputBirthdate";
import { Controller } from "react-hook-form";
function PersonalForm({control,reset,profileInfo,register,errors}) {
  const userCurrentData=profileInfo||{
    fullName:"",
    nationalCode:"",
    gender:"",
    birthDate:""
  };
  useEffect(()=>{
    reset({
      personal:userCurrentData,
    })
  },[reset,profileInfo]);
  
  return <div className={styles.container}>
     <div className={!userCurrentData.fullName ? `${styles.personal}`:`${styles.personal} ${styles.disable}`}>
          <div className={styles.title}>
          <img
                  src="/svg-files/profile-bold-black.svg"
                  alt="profile"
                />
          <h3>اطلاعات شخصی</h3>
          </div>
          <form id="personalForm">
            <fieldset>
              <div className={styles.inputContainer}>
                <label htmlFor="personal.fullName">نام و نام خانوادگی</label>
              <input
                {...register("personal.fullName")}
                placeholder="نام و نام خانوادگی"
              />
              {errors?.personal?.fullName &&<span className={styles.error}>*{errors?.personal?.fullName?.message}</span>}
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="personal.nationalCode">کدملی</label>
              <input
                {...register("personal.nationalCode")}
                placeholder="کد ملی"
              />
              {errors?.personal?.nationalCode && <span className={styles.error}>*{errors?.personal?.nationalCode?.message}</span>}
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="personal.birthDate">تاریخ تولد</label>
                <Controller
                  name="personal.birthDate"
                  control={control}
                  
                  render={({ field: { onChange, value } }) => (
                    <InputBirthdate onChange={onChange} value={value}/>
                  )}
                />

                {errors?.personal?.birthDate && section === "personalInfo" ? (
                  <span className={styles.error}>
                   {errors?.personal?.birthDate?.message} 
                  </span>
                ) : null}
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
              {errors?.personal?.gender && <span className={styles.genderError}>*{errors?.personal?.gender?.message}</span>}
              </div>
            </fieldset>
          </form>
      </div>
  </div>;
}

export default PersonalForm;
