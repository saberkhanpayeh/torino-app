import React, { useEffect, useRef } from "react";
import styles from "@/components/partials/container/ModalContainer.module.css";
import { useRouter } from "next/navigation";
function ModalContainer({ children,setModalState }) {
   const modalRef=useRef(null); 
   const router=useRouter();
   useEffect(()=>{
    const handleClickOutside=(event)=>{
        if(event.target.id==="modal"){
            // console.log(event.target)
            setModalState("");
            router.back();
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
