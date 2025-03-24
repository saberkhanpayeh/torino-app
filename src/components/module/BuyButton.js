"use client";
import { toastOptions } from "@/constant/toast";
import { useAddTocCart } from "@/services/mutations";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

function BuyButton({ id }) {
  const { isPending, mutate } = useAddTocCart();
  const router = useRouter();
  const buyHandler = () => {
    if (isPending) return;
    mutate(id, {
      onSuccess: (data) => {
        console.log(data);
        toast.success(data?.data?.message, toastOptions);
        //toast show data?.data
        router.push(`/cart?order&tourId=${id}`);
      },
      onError: (error) => {
        console.log(error?.message);
        let login = false;
        if (
          error?.message === "Access token required" ||
          error?.message === "Invalid token"
        ) {
          //show toast login konid router.push(login)
          login = true;
          toast.error("کاربری گرامی وارد حساب کاربری شوید!", {
            ...toastOptions,
            autoClose: 4000,
          });
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        }
        if (!login) toast.error(error?.message, toastOptions);
        //toast show error
      },
    });
  };
  return <button onClick={buyHandler}>رزرو و خرید</button>;
}

export default BuyButton;
