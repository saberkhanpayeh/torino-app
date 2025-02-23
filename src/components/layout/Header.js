"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from '@/components/icons/Profile'
import SiteLogo from '@/components/element/SiteLogo'
import styles from "@/components/layout/Header.module.css"
import { useRouter } from 'next/navigation';


function Header() {
    const router=useRouter();
    return(
    <header className={styles.header}>
        <div className={styles.container}>
        <div className={styles.navbar}>
            <Link href="/"><SiteLogo/></Link>
            <nav>
                <ul>
                    <li><Link href="">صفحه اصلی</Link></li>
                    <li><Link href="">خدمات گردشگری</Link></li>
                    <li><Link href="">درباره ما</Link></li>
                    <li><Link href="">تماس باما</Link></li>
                </ul>
            </nav>
        </div>
        <div className={styles.loginBtn}>
            <button onClick={()=>router.push("/login")}><Profile/><span>ورود |  ثبت نام</span></button>
            <Link href="/login">login</Link>
        </div>
        </div>

    </header>
  );
}

export default Header