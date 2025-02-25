import React from "react";
import Banner from "@/components/module/Banner";
import SearchTour from "@/components/module/SearchTour";
import Tours from "@/components/module/Tours";
import Advertise from "@/components/module/Advertise";
import WhyTorino from "@/components/module/WhyTorino";
import Attributes from "@/components/module/Attributes";

function HomePage({data}) {

  return (
    <>
      <Banner />
      <SearchTour />
      <Tours data={data}/>
      <Advertise/>
      <WhyTorino/>
      <Attributes/>
    </>
  );
}

export default HomePage;
