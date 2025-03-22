import React, { Suspense } from "react";
import PageLayout from "../partials/container/PageLayout";
import UserSidebar from "../module/UserSidebar";
import MyToursList from "../module/MyToursList";

function MyToursPage() {
  return (
    <PageLayout page="my-tours">
      <UserSidebar />
        <MyToursList />
    </PageLayout>
  );
}

export default MyToursPage;
