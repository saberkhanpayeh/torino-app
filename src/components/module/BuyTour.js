import { getPeriodTour } from "@/utils/convertDate";
import React from "react";
import styles from "@/components/module/BuyTour.module.css";
import { useCreateOrder, useEditProfile } from "@/services/mutations";
import { splitByFirstSpace } from "@/utils/helper";
import { useInvalidateQuery } from "@/services/queries";
import { useRouter } from "next/navigation";
function BuyTour({ cartData, watch, birthDate, createProfile, profileInfo }) {
  const router=useRouter();
  const { mutate: mutateProfile, isPending: profilePending } = useEditProfile();
  const { mutate: mutateOrder, isPending: orderPending } = useCreateOrder();
  const invalidateQueries = useInvalidateQuery();
  const {
    id,
    origin,
    startDate,
    endDate,
    title,
    fleetVehicle,
    price,
    capacity,
    image,
  } = cartData;
  const periodTour = getPeriodTour(startDate, endDate);
  const night = periodTour - 1;
  console.log(cartData);
  const orderHandler = () => {
    const data = { fullName: "", nationalCode: "", gender: "", birthDate: "" };
    if (createProfile) {
      data.fullName = watch("personal.fullName");
      data.nationalCode = watch("personal.nationalCode");
      data.gender = watch("personal.gender");
      data.birthDate = birthDate;
      if (
        !data.fullName ||
        !data.nationalCode ||
        !data.gender ||
        !data.birthDate
      ) {
        //show toast to enter info
        console.log("enter valid");
        return;
      }
    } else {
      data.fullName = profileInfo.fullName;
      data.nationalCode = profileInfo.nationalCode;
      data.gender = profileInfo.gender;
      data.birthDate = profileInfo.birthDate;
    }

    if (profilePending || orderPending) return;
    const [firstName, lastName] = splitByFirstSpace(data.fullName);
    const newUserProfile = {
      ...data,
      firstName,
      lastName,
    };
    if (createProfile) {
      mutateProfile(newUserProfile, {
        onSuccess: (data) => {
          console.log(data?.data?.message);
        },
        onError: (error) => {
          //show toast error in create profile
          console.log(error?.message);
        },
      });
    }
    mutateOrder(data, {
      onSuccess: (data) => {
        console.log(data?.data?.message);
        //show toast order has successfully
        //push to transactions
        invalidateQueries(["basket-item"]);
        router.push("/");
      },
      onError: (error) => {
        console.log(error.message);
        //show toast
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <p>
          {periodTour} روز و {night} شب
        </p>
      </div>
      <div className={styles.price}>
        <p>قیمت نهایی</p>
        <p className={styles.toman}>
          <span>{price.toLocaleString()}</span>تومان
        </p>
      </div>
      <button onClick={orderHandler}>ثبت و خرید نهایی</button>
    </div>
  );
}

export default BuyTour;
