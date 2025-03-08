"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import styles from "@/components/module/UserSidebar.module.css";
import { useRouter } from "next/navigation";
import Profile from "../icons/Profile";
import SunFogBold from "../icons/SunFogBold";
import ConvertCard from "../icons/ConvertCard";
import IconGenerator from "../partials/container/IconGenerator";
import { useProfileData } from "@/services/queries";
const routes = [
  { id: 1, title: "پروفایل", route: "/dashboard/profile" },
  { id: 2, title: "تور های من", route: "/dashboard/my-tours" },
  { id: 3, title: "تراکنش ها", route: "/dashboard/transactions" },
];

function UserSidebar({style}) {
  // const {refetch}=useProfileData();
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // console.log(pathname);
    if(pathname==="/dashboard/edit-profile")
      {setSelected("profile");
        return;
      }
    // if(pathname==="/dashboard/profile")
    //   refetch();
    setSelected(pathname);
  }, [pathname]);
  const sidebarHandler = (event) => {
    let li = event.target;
    while(li && li.tagName !=="LI"){
      li=li.parentElement; //move from svg or p tag until reach to li
    }
    if(li){
      const route=li.id;
      if(route)
      {
        // console.log(route);
        router.push(route);
      }
    }
    // const id = event.target.id;
    // console.log(id);
    // console.log(event.target);

   // router.push(`${id}`);
  };
  return (
    <ul className={styles.container} onClick={sidebarHandler} style={style}>
      {routes.map((item, index) => (
        <li
          key={item.id}
          id={item.route}
          className={item.route===selected ? styles.select:null}
        >
          <IconGenerator index={index} />
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default UserSidebar;
