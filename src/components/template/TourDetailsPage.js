import React from "react";
import TourDetails from "@/components/module/TourDetails";
import Wrapper from "../partials/container/Wrapper";
import styles from "@/components/template/TourDetailsPage.module.css"
function TourDetailsPage({data}) {
  return (<>
  <Wrapper page="tour-details"><TourDetails data={data}/></Wrapper>
  </>);
}

export default TourDetailsPage;
