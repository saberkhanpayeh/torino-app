"use client";
import React, { useState } from "react";
import Select from "react-select";
import styles from "@/components/module/SearchTour.module.css";
import Close from "../icons/Close";
import Location from "../icons/Location";
import CustomSelection from "../element/CustomSelection";
import { customDestinationCity, customOriginCity } from "@/constant/cities";
import GlobalSearch from "../icons/GlobalSearch";
import InputSearchDate from "../element/InputSearchDate";
import { tourFilter } from "@/utils/filter";
import SearchToursList from "./SearchToursList";

function SearchTour({ data }) {
  // const date = new Date("2025-03-01");
  // if (isNaN(date.getTime())) {
  //   console.error("تاریخ نامعتبر است!");
  // }
  const [isOpen,setIsOpen]=useState(false);
  const [filteredTours,setFilteredTours]=useState([]);
  const [searchTour, setSearchTour] = useState({
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
  });
  console.log(searchTour);
  const searchHandler = () => {
    const filter = tourFilter(data, searchTour);
    setFilteredTours(filter);
    setIsOpen(true);
    console.log(filter);
  };
  return (
    <div className={styles.container}>
      <h2>
        <span>تورینو </span>برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      <div className={styles.searchWrapper}>
        <ul className={styles.selectContainer}>
          <li className={styles.item}>
            <CustomSelection
            searchTour={searchTour}
              setSearchTour={setSearchTour}
              options={customOriginCity()}
              selectionLabel="مبدا"
              placeholderIcon={<Location />}
              type="origin"
            />
          </li>
          <li className={styles.item}>
            <CustomSelection
            searchTour={searchTour}
              setSearchTour={setSearchTour}
              options={customDestinationCity()}
              selectionLabel="مقصد"
              placeholderIcon={<GlobalSearch />}
              type="destination"
            />
          </li >
          <li className={styles.item}>
            <InputSearchDate setSearchTour={setSearchTour} />
          </li>
        </ul>
        <button onClick={searchHandler} className={styles.searchBtn}>جستجو</button>
      </div>
      <SearchToursList tours={filteredTours} setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
  );
}

export default SearchTour;
