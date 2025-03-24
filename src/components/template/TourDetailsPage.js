import React from "react";
import TourDetails from "@/components/module/TourDetails";
import Wrapper from "@/components/partials/container/Wrapper";
function TourDetailsPage({data}) {
  return (<>
  <Wrapper page="tour-details"><TourDetails data={data}/></Wrapper>
  </>);
}

export default TourDetailsPage;
