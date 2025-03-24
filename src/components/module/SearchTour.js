"use client";
import React, { useState } from "react";
import styles from "@/components/module/SearchTour.module.css";
import Location from "@/components/icons/Location";
import CustomSelection from "@/components/element/CustomSelection";
import GlobalSearch from "@/components/icons/GlobalSearch";
import InputSearchDate from "@/components/element/InputSearchDate";
import { customDestinationCity, customOriginCity } from "@/constant/cities";
import { tourFilter } from "@/utils/filter";
import SearchToursList from "./SearchToursList";

function SearchTour({ data }) {

  const [isOpen,setIsOpen]=useState(false);
  const [filteredTours,setFilteredTours]=useState([]);
  const [searchTour, setSearchTour] = useState({
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
  });
  // console.log(searchTour);
  const searchHandler = () => {
    const filter = tourFilter(data, searchTour);
    setFilteredTours(filter);
    setIsOpen(true);
    // console.log(filter);
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
