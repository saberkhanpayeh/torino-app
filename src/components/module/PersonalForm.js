"use client"
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "@/components/module/PersonalForm.module.css";
import InputBirthdate from "../element/InputBirthdate";
import ProfileBold from "../icons/ProfileBold";
import ProfileBlank from "../icons/ProfileBlank";
function PersonalForm({onSubmit,handleSubmit,reset,profileInfo,register,setBirthDate}) {
  const userCurrentData=profileInfo||{
    fullName:"",
    nationalCode:"",
    gender:"",
  };
  useEffect(()=>{
    reset({
      personal:userCurrentData,
    })
  },[reset,profileInfo]);
 const section="personalInfo";
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
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="personal.nationalCode">کدملی</label>
              <input
                {...register("personal.nationalCode")}
                placeholder="کد ملی"
              />
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="date">تاریخ تولد</label>
              <InputBirthdate
                setBirthDate={setBirthDate}
                initialValue={profileInfo?.birthDate}
              />
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
              </div>
            </fieldset>
          </form>
        {/* <div className={section==="personalInfo"? `${styles.footerBtn}`:`${styles.footerBtn} ${styles.disableBtn}`}>
          <button
            type="button"
            onClick={handleSubmit((data) => onSubmit(data, "personal"))}
            className={styles.select}
          >
            تایید
          </button>
          <button onClick={()=>router.push("/dashboard/profile")}>انصراف</button>
        </div> */}
      </div>
  </div>;
}

export default PersonalForm;
