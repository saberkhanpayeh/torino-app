import React from "react";
import TourDetails from "@/components/module/TourDetails";
import Wrapper from "../partials/container/Wrapper";

function TourDetailsPage({data}) {
  return <Wrapper><TourDetails data={data}/></Wrapper>;
}

export default TourDetailsPage;
