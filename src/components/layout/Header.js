"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Profile from "@/components/icons/Profile";
import SiteLogo from "@/components/element/SiteLogo";
import { redirect, usePathname, useRouter } from "next/navigation";
import { getFromLocalStorage } from "@/utils/localstorage";
import DownArrow from "@/components/icons/DownArrow";
import ProfileBold from "@/components/icons/ProfileBold";
import ProfileBlank from "@/components/icons/ProfileBlank";
import Logout from "@/components/icons/Logout";
import { setCookie } from "@/utils/cookie";
import { useQueryClient } from "@tanstack/react-query";
import Hamburger from "@/components/icons/mobile-icons/Hamburger";
import Login from "@/components/icons/mobile-icons/Login";
import ModalContainer from "@/components/partials/container/ModalContainer";
import HamburgerMenu from "@/components/element/HamburgerMenu";
import styles from "@/components/layout/Header.module.css";

function Header() {
  const queryClient = useQueryClient();
  const [isLogin, setIsLogin] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [modalState, setModalState] = useState("");
  const [menue, setMenue] = useState(true);
  const [isSticky,setIsSticky]=useState(false);
  const fixedRange=[200,1700];
  const menueRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if(pathname==="/")
      document.title="تورینو | تورگردی متمایز";
    const data = getFromLocalStorage("mobile");
    if (data) {
      setUserPhone(data);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    setMenue(false);
  }, [pathname]);
  useEffect(() => {
    if (menue && menueRef.current) {
      menueRef.current.focus(); // setFoucos when menue is open
    }
  }, [menue]);
  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > fixedRange[0] && window.scrollY <fixedRange[1]) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
  const logoutHandler = () => {
    localStorage.clear();
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    queryClient.clear();
    window.location.reload();
  };
  const profileHandler = () => {
    router.push("/dashboard/profile");
  };
  const hamburgerHandler = () => {
    setModalState("hamburger");
  };
  return (
    <header className={`${styles.header} ${isSticky ?styles.sticky:styles.static}`}>
      <div className={styles.container}>
        <div className={styles.hamburgerIcon} onClick={hamburgerHandler}>
          <Hamburger />
        </div>
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
            <span><Profile /></span>
            <p>{userPhone}</p>
            <DownArrow />
          </div>
        ) : (
          <>
            <div className={styles.loginBtn}>
              <button onClick={() => router.push("/login")}>
                <Profile />
                <span>ورود | ثبت نام</span>
              </button>
            </div>
            <span
              className={styles.mobileLogin}
              onClick={() => router.push("/login")}
            >
              <Login />
            </span>
          </>
        )}
        {menue && isLogin && (
          <ul
            className={styles.userMenue}
            ref={menueRef}
            tabIndex={0}
            onBlur={() => setMenue((menue) =>! menue)}
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
      {modalState === "hamburger" && (
        <ModalContainer setModalState={setModalState} modalState={modalState}>
          <HamburgerMenu />
        </ModalContainer>
      )}
    </header>
  );
}

export default Header;
