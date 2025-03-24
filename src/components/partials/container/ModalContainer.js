import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/partials/container/ModalContainer.module.css";
function ModalContainer({ children,setModalState,modalState}) {
   const modalRef=useRef(null); 
   const router=useRouter();
   useEffect(()=>{
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
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
   },[])
  return <div id="modal" ref={modalRef} className={styles.container}>{children}</div>;
}

export default ModalContainer;
