"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import IconGenerator from "../partials/container/IconGenerator";
import styles from "@/components/module/UserSidebar.module.css";
const routes = [
  { id: 1, title: "پروفایل", route: "/dashboard/profile" },
  { id: 2, title: "تور های من", route: "/dashboard/my-tours" },
  { id: 3, title: "تراکنش ها", route: "/dashboard/transactions" },
];

function UserSidebar({style}) {
 
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState("");

  useEffect(() => {
  
    if(pathname==="/dashboard/profile/edit-profile")
      {
        setSelected("/dashboard/profile");
        console.log(pathname);
        return;
      }
  
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
     
        router.push(route);
      }
    }
  
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

