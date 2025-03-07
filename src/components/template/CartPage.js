"use client";
import React, { use, useEffect, useState } from "react";
import Wrapper from "../partials/container/Wrapper";
import BuyTour from "../module/BuyTour";
import { useCartData, useProfileData } from "@/services/queries";
import { useRouter } from "next/navigation";
import PersonalForm from "../module/PersonalForm";
import { useForm } from "react-hook-form";
import { useEditProfile } from "@/services/mutations";

function CartPage() {
  // in this page we have 3 type user
  //1)UnAuthoraized 2)Authoraized no profilIno 3)complete profile
  const router = useRouter();
  const [birthDate, setBirthDate] = useState("");
  const { data: profile, isPending: profilePending } = useProfileData();
  const { data: cart, isLoading, isPending: cartPending } = useCartData();
  const [createProfile, setCreateProfile] = useState(false);
  const profileInfo = profile?.data || "";
  const cartData = cart?.data || "";
  useEffect(() => {
    if (!profileInfo.fullName) setCreateProfile(true);
    else setCreateProfile(false);
  }, [profileInfo]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  //   console.log(cartData);
  //   return null;
  useEffect(() => {
     if (!profileInfo) router.push("/");
  }, [profile]);
  if (profilePending) return <p>...Loading</p>;
  return (
    <Wrapper>
        {
        cartData && !isLoading &&(
          <PersonalForm
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
          onSubmit={onSubmit}
          profileInfo={profileInfo}
          setBirthDate={setBirthDate}
        />
        )
      }
      {cartData && !isLoading && (
        <BuyTour
          cartData={cartData}
          watch={watch}
          birthDate={birthDate}
          createProfile={createProfile}
          profileInfo={profileInfo}
        />
      )}
    
    </Wrapper>
  );
}

export default CartPage;
