"use client";
import { useAddTocCart } from "@/services/mutations";
import { useProfileData } from "@/services/queries";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function BuyButton({ id }) {
  const { isPending, mutate } = useAddTocCart();
  const router = useRouter();
  const buyHandler = () => {
    if(isPending) return;
    mutate(id,{
        onSuccess:(data)=>{
            console.log(data);
            //toast show data?.data
            router.push(`/cart?order&tourId=${id}`);
        },
        onError:(error)=>{
            console.log(error?.message);
            if(error?.message==="Access token required")
            {
              //show toast login konid router.push(login)
              router.push("/login");
            }
            //toast show error
        }
    })  
  };
  return <button onClick={buyHandler}>رزرو و خرید</button>;
}

export default BuyButton;
