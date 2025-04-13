import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/partials/container/ModalContainer.module.css";
function ModalContainer({ children,setModalState,modalState}) {
   const modalRef=useRef(null); 
   const router=useRouter();
   useEffect(()=>{
    // document.body.style.overflow="hidden";
    const handleClickOutside=(event)=>{
        if(modalState==="SendOtpModal"|| modalState==="CheckOtpModal"){
            // console.log(event.target)
            if(event.target.id==="modal"){
              setModalState("");
              router.back();
            }

        }
        if(modalState==="hamburger"&&event.target.id==="modal"){
          setModalState("");
        }
        
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
   },[])
  return <div id="modal" ref={modalRef} className={`${styles.container} modal-scroll`}>{children}</div>;
}

export default ModalContainer;
