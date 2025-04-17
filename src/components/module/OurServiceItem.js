"use client"
import React, { useEffect, useState } from "react";
import styles from "@/components/module/OurService.module.css"
import DownArrow from "../icons/mobile-icons/DownArrow";
function OurServiceItem({data}) {
    const [more,setMore]=useState(1);
    useEffect(()=>{
        const getWidth = () => document.documentElement.clientWidth;
        const handleResize=()=>{
            const width=getWidth();
            if(width<=768)
                setMore(0);
        }
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);
  return (
    <li>
      <span className={styles.icon}>
        {
            data.icon
        }
      </span>
      <div>
        <h3>{data.title}</h3>
        <p>
            {more?data.description:data.summary}
        </p>
        <button onClick={()=>setMore(!more)} className={`${styles.downIcon} ${more && styles.close}`}>
        {more ? "بستن" : (<><DownArrow /> ادامه مطلب</>)}
        </button>
      </div>
    </li>
  );
}

export default OurServiceItem;
