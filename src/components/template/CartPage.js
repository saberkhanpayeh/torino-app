"use client";
import React, { use, useEffect, useState } from "react";
import Wrapper from "../partials/container/Wrapper";
import BuyTour from "../module/BuyTour";
import { useCartData, useProfileData } from "@/services/queries";
import { useRouter } from "next/navigation";
import PersonalForm from "../module/PersonalForm";
import { useForm, Controller } from "react-hook-form";
import { useEditProfile } from "@/services/mutations";
import EmptyCart from "../module/EmptyCart";
import RotatingLineLoader from "../element/RotatingLineLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@/schema/validation";
import styles from"@/components/template/CartPage.module.css"
function CartPage() {

  const router = useRouter();
  const [birthDate, setBirthDate] = useState("");
  const { data: profile, isLoading: profileLoading } = useProfileData();
  const { data: cart, isLoading: cartLoading } = useCartData();
  const [createProfile, setCreateProfile] = useState(false);
  const profileInfo = profile?.data || "";
  const cartData = cart?.data || "";
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
    resolver: yupResolver(profileSchema),
    mode:"all"
  });
  

  return (
    <Wrapper page="cart">
      {profileLoading || cartLoading ? <RotatingLineLoader /> : null}
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
      {!cartData && !cartLoading && <EmptyCart />}
    </Wrapper>
  );
}

export default CartPage;
