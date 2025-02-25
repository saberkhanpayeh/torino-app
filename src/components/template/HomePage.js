import React from "react";
import Banner from "@/components/module/Banner";
import SearchTour from "@/components/module/SearchTour";
import Tours from "@/components/module/Tours";

function HomePage({data}) {

  return (
    <>
      <Banner />
      <SearchTour />
      <Tours data={data}/>
    </>
  );
}

export default HomePage;
