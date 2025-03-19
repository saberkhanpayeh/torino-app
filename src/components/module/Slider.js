"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/module/Slider.module.css"
import LineArrowRight from "../icons/LineArrowRight";
import Image from "next/image";
const images = [
 {id:1,src:"/images/slider-images/1.png"},
  {id:2,src:"/images/slider-images/2.png"},
  {id:3,src:"/images/slider-images/3.png"},
  {id:4,src:"/images/slider-images/4.png"},
];
function Slider() {
  const [slides, setSlides] = useState(images);
  const [autoPlay,setAutoPlay]=useState(true);
  const [currentIndex,setCurrentIndex]=useState(1);
  const [prevState,setPrevState]=useState(false);
  const [nextState,setNextState]=useState(true);
  const getWidth = () => document.documentElement.clientWidth;
  const [width, setWidth] = useState(getWidth());
  const [pivot,setPivot]=useState(0);
  const nextSlide = () => {
    if(currentIndex===slides.length)
    {
      setNextState(false);
      setPrevState(true);
     return;
    }
    else{
      setCurrentIndex(currentIndex+1);
      setSlides((prevSlides) => [...prevSlides.slice(1), prevSlides[0]]);
    }
   
  };

  const prevSlide = () => {
    if(currentIndex<=1)
    {
      setNextState(true);
      setPrevState(false);
      return;
    }
    else{
      setCurrentIndex(currentIndex-1);
      setSlides((prevSlides) => [prevSlides[prevSlides.length - 1], ...prevSlides.slice(0, -1)])
    }
};
// console.log({prevState,nextState});
    // useEffect(() => {
    //   if (!autoPlay) return; 
  
    //   const interval = setInterval(() => {
    //     if(nextState)
    //      nextSlide();
    //     else{
    //       prevSlide();
    //     }
    //   }, 3000); 
  
    //   return () => clearInterval(interval); 
    // }, [slides,prevState,prevState]);
  
    useEffect(() => {
      const handleResize = () => setWidth(getWidth());
      if(width<=480){
          setPivot(40);
      }
     else if(width>480 && width<=768){
        setPivot(55);
      }
      else{
        setPivot(60);
      }
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    console.log(width)
  return (   
  <div className={styles.sliderContainer}>
    {slides.map((item, index) => (
      <div
        key={item.id}
        className={styles.slide}
        style={{
          transform: `translateX(${-index * pivot}px) scale(${1 - index * 0.15})`,
          zIndex: images.length - index,
          opacity: index === images.length - 1 ? 0.8 : 1,
        }}
      >
        <Image src={item.src} width={389} height={479}  alt={`slide-${index}`} />
      </div>
    ))}
    
    <div className={styles.controls}>
    <button className={`${styles.btnRight} ${currentIndex===slides.length && styles.btnDisable}`} onClick={nextSlide} >
      <LineArrowRight/>
      </button>
      <p className={styles.progress}>{currentIndex}/{slides.length}</p>
      <button className={`${styles.btnLeft} ${currentIndex<=1 && styles.btnDisable}`} onClick={prevSlide}>
      <LineArrowRight/>
      </button> 
    </div>
  </div>);
}
export default Slider;

