"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Profile from "@/components/icons/Profile";
import SiteLogo from "@/components/element/SiteLogo";
import styles from "@/components/layout/Header.module.css";
import { usePathname, useRouter } from "next/navigation";
import { getFromLocalStorage } from "@/utils/localstorage";
import DownArrow from "@/components/icons/DownArrow";
import ProfileBold from "../icons/ProfileBold";
import ProfileBlank from "../icons/ProfileBlank";
import Logout from "../icons/Logout";
import { setCookie } from "@/utils/cookie";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [menue, setMenue] = useState(false);
  const menueRef=useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    
      const data = getFromLocalStorage("mobile");
      if (data) {
        setUserPhone(data);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
  }, [pathname]);
  useEffect(() => {
    if (menue && menueRef.current) {
      menueRef.current.focus(); // setFoucos when menue is open
    }
  }, [menue]);
  const logoutHandler=()=>{
    localStorage.clear();
    setCookie("accessToken","",0);
    setCookie("refreshToken","",0);
    router.push("/");
  }
  const profileHandler=()=>{
    router.push("/dashboard/profile");
    setMenue((menue)=>!menue);
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/">
            <SiteLogo />
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="">صفحه اصلی</Link>
              </li>
              <li>
                <Link href="">خدمات گردشگری</Link>
              </li>
              <li>
                <Link href="">درباره ما</Link>
              </li>
              <li>
                <Link href="">تماس باما</Link>
              </li>
            </ul>
          </nav>
        </div>
        {isLogin ? (
          <div
            className={styles.userInfo}
            onClick={() => setMenue((menue) => !menue)}
          >
            <Profile />
            <p>{userPhone}</p>
            <DownArrow />
          </div>
        ) : (
          <div className={styles.loginBtn}>
            <button onClick={() => router.push("/login")}>
              <Profile />
              <span>ورود | ثبت نام</span>
            </button>
          </div>
        )}
        {menue && isLogin && (
          <ul
            className={styles.userMenue}
            ref={menueRef}
            tabIndex={0}
            onBlur={() => setMenue((menue)=>!menue)}
          >
            <li>
              <span>
                <ProfileBold />
              </span>
              <p>{userPhone}</p>
            </li>
            <li onClick={profileHandler}>
                <ProfileBlank />
                <p>اطلاعات حساب کاربری</p>
            </li>
            <li onClick={logoutHandler}>
                <Logout />
                <p>خروج از حساب کاربری</p>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
