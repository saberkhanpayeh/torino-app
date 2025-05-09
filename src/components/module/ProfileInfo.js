"use client";
import { useProfileData } from "@/services/queries";
import React, { use, useState } from "react";
import Edit from "@/components/icons/Edit";
import Line from "@/components/icons/Line";
import Link from "next/link";
import styles from "@/components/module/ProfileInfo.module.css";
function ProfileInfo() {
  const queryOptions = {
    refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 5,
    retry:1
  };
  const { data, error, isLoading, isError, isFetching } =
    useProfileData(queryOptions);
  const userProfile = data?.data || {};
  const bankInfo = userProfile?.payment || {};
  // console.log(data);
  const check = (field) => {
    if (field === "Invalid Date") return <Line />;
    return field ? field : <Line />;
  };
  const showGender = (gender) => {
    if (gender) {
      return gender === "male" ? "مرد" : "زن";
    } else return <Line />;
  };
  if(isError)return<p>خطا در ارتباط با سرور</p>
  return (
    <div className={styles.container}>
      <div className={styles.accountInfo}>
        <h3>اطلاعات حساب کاربری</h3>
        <div className={styles.accountContainer}>
          <ul>
            <li>
              <p className={styles.itemName}>شماره موبایل</p>
              <p className={styles.itemValue}>{userProfile.mobile}</p>
            </li>
            <li>
              <p className={styles.itemName}>ایمیل</p>
              <p className={styles.itemValue}>{check(userProfile.email)}</p>
            </li>
          </ul>
          <div className={styles.btnAccount}>
            {userProfile.email ? (
              <Link href="/dashboard/profile/edit-profile?section=accountInfo&edit=userEmail/">
                <Edit />
                <span>ویرایش</span>
              </Link>
            ) : (
              <Link href="/dashboard/profile/edit-profile?section=accountInfo&add=userEmail/">
                <Edit />
                <span>افزودن</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <div>
          <h3>اطلاعات شخصی</h3>
          <div className={styles.btn}>
            <Link href="/dashboard/profile/edit-profile?section=personalInfo&edit=fields">
              <Edit />
              <span>ویرایش اطلاعات</span>
            </Link>
          </div>
        </div>
        <ul>
          <li>
            <p className={styles.itemName}>نام و نام خانوادگی</p>
            <p className={styles.itemValue}>{check(userProfile.fullName)}</p>
          </li>
          <li>
            <p className={styles.itemName}>کد ملی</p>
            <p className={styles.itemValue}>
              {check(userProfile.nationalCode)}
            </p>
          </li>
          <li>
            <p className={styles.itemName}>جنسیت</p>
            <p className={styles.itemValue}>{showGender(userProfile.gender)}</p>
          </li>
          <li>
            <p className={styles.itemName}>تاریخ تولد</p>
            <p className={styles.itemValue}>
              {check(
                new Date(userProfile.birthDate).toLocaleDateString("fa-IR")
              )}
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.bankInfo}>
        <div>
          <h3>اطلاعات حساب بانکی</h3>
          <div className={styles.btn}>
            <Link href="/dashboard/profile/edit-profile?section=creaditInfo&edit=fields">
              <Edit />
              <span>ویرایش اطلاعات</span>
            </Link>
          </div>
        </div>

        <ul>
          <li>
            <p className={styles.itemName}>شماره شبا</p>
            <p className={styles.itemValue}>{check(bankInfo.shaba_code)}</p>
          </li>
          <li>
            <p className={styles.itemName}>شماره کارت</p>
            <p className={styles.itemValue}>{check(bankInfo.debitCard_code)}</p>
          </li>
          <li>
            <p className={styles.itemName}>شماره حساب</p>
            <p className={styles.itemValue}>
              {check(bankInfo.accountIdentifier)}
            </p>
          </li>
          <li>
            <p className={styles.itemName}></p>
            <p className={styles.itemValue}></p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileInfo;
