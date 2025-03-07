import React from "react";
import PageLayout from "../partials/container/PageLayout";
import UserSidebar from "../module/UserSidebar";
import UserTransaction from "../module/UserTransaction";

function TransactionPage() {
  return (
    <PageLayout>
      <UserSidebar />
      <UserTransaction/>
    </PageLayout>
  );
}

export default TransactionPage;
