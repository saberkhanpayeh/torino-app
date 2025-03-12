"use client";
import React, { use, useEffect, useState } from "react";
import Wrapper from "../partials/container/Wrapper";
import BuyTour from "../module/BuyTour";
import { useCartData, useProfileData } from "@/services/queries";
import { useRouter } from "next/navigation";
import PersonalForm from "../module/PersonalForm";
import { useForm } from "react-hook-form";
import { useEditProfile } from "@/services/mutations";
import EmptyCart from "../module/EmptyCart";
import RotatingLineLoader from "../element/RotatingLineLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@/schema/validation";

function CartPage() {
  // in this page we have 3 type user
  //1)UnAuthoraized 2)Authoraized no profilIno 3)complete profile
  const router = useRouter();
  const [birthDate, setBirthDate] = useState("");
  const { data: profile,isLoading:profileLoading } = useProfileData();
  const { data: cart,isLoading:cartLoading} = useCartData();
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
  } = useForm(
   {resolver:yupResolver(profileSchema),
    mode:"onChange"
   } 
  );
  const onSubmit = (data) => {
    console.log(data);
  };

  //   console.log(cartData);
  //   return null;
  // if(profileLoading||cartLoading)
  //   return<RotatingLineLoader/>
  return (
    <Wrapper>
        {
          profileLoading||cartLoading ? <RotatingLineLoader/>:null
        }
        {
        profileInfo && !profileLoading &&(
          <PersonalForm
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
          onSubmit={onSubmit}
          profileInfo={profileInfo}
          setBirthDate={setBirthDate}
          errors={errors}
        />
        )
      }
      {cartData && !cartLoading && (
        <BuyTour
          cartData={cartData}
          watch={watch}
          birthDate={birthDate}
          createProfile={createProfile}
          profileInfo={profileInfo}
        />
      )}
      {!cartData && !cartLoading &&(
          <EmptyCart/>
      )}
    
    </Wrapper>
  );
}

export default CartPage;
