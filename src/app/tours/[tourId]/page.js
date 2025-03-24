import TourDetailsPage from "@/components/template/TourDetailsPage";
import { getTourDetails, getToursList } from "@/services/serverDataFetching";
import { createDescription } from "@/utils/meta";
import React from "react";
export async function generateStaticParams() {
  const { data, error } = await getToursList();
  const params = data.map((tour) => ({ tourId: tour.id }));
  return params;
}
export async function generateMetadata({params}){
  const { data, error } = await getTourDetails(params.tourId);
  return{
    title:`تورینو - ${data.title}`,
    description:createDescription(data),
  }
}
async function Tour({params}) {
  const { data, error } = await getTourDetails(params.tourId);
  return (
    <>
      <TourDetailsPage data={data} />
    </>
  );
}

export default Tour;
