"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import styles from "@/components/module/UserSidebar.module.css";
import { useRouter } from "next/navigation";
import Profile from "../icons/Profile";
import SunFogBold from "../icons/SunFogBold";
import ConvertCard from "../icons/ConvertCard";
import IconGenerator from "../partials/container/IconGenerator";
const routes = [
  { id: 1, title: "پروفایل", route: "profile" },
  { id: 2, title: "تور های من", route: "my-tours" },
  { id: 3, title: "تراکنش ها", route: "transactions" },
];

function UserSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // console.log(pathname);
    if(pathname==="/edit-profile")
      {setSelected("profile");
        return;
      }
    const newPathname = pathname.replace("/", "");
    setSelected(newPathname);
  }, [pathname]);
  const sidebarHandler = (event) => {
    const tagName = event.target.tagName;
    const id = event.target.id;
    // console.log(id);

    router.push(`/${id}`);
    if (tagName !== "LI") return;
  };
  return (
    <ul className={styles.container} onClick={sidebarHandler}>
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
