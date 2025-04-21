"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/components/partials/container/Wrapper";
import BuyTour from "@/components/module/BuyTour";
import { useCartData, useProfileData } from "@/services/queries";
import { useRouter } from "next/navigation";
import PersonalForm from "@/components/module/PersonalForm";
import { useForm, Controller } from "react-hook-form";
import EmptyCart from "@/components/module/EmptyCart";
import RotatingLineLoader from "@/components/element/RotatingLineLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSchema, profileSchema } from "@/schema/validation";
import styles from "@/components/template/CartPage.module.css";
import Head from "next/head";
import Breadcrumbs from "../element/Breadcrumbs";
function CartPage() {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState("");
  const { data: profile, isLoading: profileLoading } = useProfileData();
  const { data: cart, isLoading: cartLoading } = useCartData();
  const [createProfile, setCreateProfile] = useState(false);
  const profileInfo = profile?.data || "";
  const cartData = cart?.data || "";
  useEffect(() => {
    document.title = "تورینو - سبد خربد";
  }, []);
  useEffect(() => {
    if (!profileInfo.fullName) setCreateProfile(true);
    else setCreateProfile(false);
  }, [profileInfo]);
  const {
    register,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(getSchema("personalInfo")),
    mode: "all",
  });

  return (
    <>
      <Wrapper page="cart">
        {profileLoading || cartLoading ? <RotatingLineLoader /> : null}
        {profileInfo && !profileLoading && cartData && !cartLoading && (
          <div className={styles.container}>
            {cartData && !cartLoading && (
              <Breadcrumbs data={{ page: "cart", tourName: cartData?.title }} />
            )}
            <div className={styles.main}>
              {profileInfo && !profileLoading && (
                <PersonalForm
                  register={register}
                  reset={reset}
                  control={control}
                  Controller={Controller}
                  profileInfo={profileInfo}
                  setBirthDate={setBirthDate}
                  errors={errors}
                />
              )}
              {cartData && !cartLoading && (
                <BuyTour
                  cartData={cartData}
                  watch={watch}
                  birthDate={birthDate}
                  createProfile={createProfile}
                  profileInfo={profileInfo}
                />
              )}
            </div>
          </div>
        )}
        {!cartData && !cartLoading && <EmptyCart />}
      </Wrapper>
    </>
  );
}

export default CartPage;
