import React, { Suspense } from "react";
import PageLayout from "@/components/partials/container/PageLayout";
import UserSidebar from "@/components/module/UserSidebar";
import MyToursList from "@/components/module/MyToursList";

function MyToursPage() {
  return (
    <PageLayout page="my-tours">
      <UserSidebar />
        <MyToursList />
    </PageLayout>
  );
}

export default MyToursPage;
