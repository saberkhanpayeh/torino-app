"use client";
import React, { useEffect, useRef, useState } from "react";
import Close from "@/components/icons/Close";
import styles from "@/components/element/CustomSelection.module.css";
function CustomSelection({
  options,
  selectionLabel,
  placeholderIcon,
  setSearchTour,
  searchTour,
  type,
}) {
  const [select, setSelect] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const listRef = useRef(null);
  // const options = [{ id: 1, label: "x", icon: 1 },
  //   {id:2,label:"x",icon:1},
  //   {id:3,label:"x",icon:1},
  //   {id:4,label:"x",icon:1},
  // ];
  // useEffect(() => {
  //   if (type === "origin") setSelect(searchTour.origin);
  //   else if (type === "destination") setSelect(searchTour.destination);
  // }, [type]);
  useEffect(() => {
    if (type === "origin") {
      const value = select.value || "";
      setSearchTour((searchTour) => ({ ...searchTour, origin: value }));
    } else if (type === "destination") {
      const value = select.value || "";
      setSearchTour((searchTour) => ({ ...searchTour, destination: value }));
    }
  }, [select]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setIsOpen(false); // منو را ببند
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const optionHandler = (option, index) => {
    setSelect(option);
    setIsOpen(false);
    setActive(index);
    // onChange && onChange(option);
  };
  const closeHandler=()=>{
    setSelect("")
    setActive("");
  }
  return (
    <div ref={listRef} className={styles.selectContainer}>
      {select ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.selectInput}
          >
            {select.icon}
            <span>{select.label}</span>
          </button>
          <span className={styles.closeBtn}onClick={closeHandler}><Close/>پاک کردن</span>
        </>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.selectInput}
        >
          {placeholderIcon}
          <span>{selectionLabel}</span>
        </button>
      )}
      {isOpen && (
        <ul
          style={{ position: "absolute" }}
          className={styles.optionsContainer}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => optionHandler(option, index)}
              className={`${styles.option} ${
                active == index ? styles.active : ""
              }`}
            >
              {option.icon}
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelection;
