import TourDetailsPage from "@/components/template/TourDetailsPage";
import { getTourDetails, getToursList } from "@/services/serverDataFetching";
import React from "react";
export async function generateStaticParams() {
  const { data, error } = await getToursList();
  const params = data.map((tour) => ({ tourId: tour.id }));
  return params;
}
async function Tour({ params }) {
  const { data, error } = await getTourDetails(params.tourId);
  return (
    <>
      <TourDetailsPage data={data} />
    </>
  );
}

export default Tour;
