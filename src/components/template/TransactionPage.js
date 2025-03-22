import React from "react";
import PageLayout from "../partials/container/PageLayout";
import UserSidebar from "../module/UserSidebar";
import UserTransaction from "../module/UserTransaction";

function TransactionPage() {
  return (
    <PageLayout page="transactions">
      <UserSidebar />
      <UserTransaction/>
    </PageLayout>
  );
}

export default TransactionPage;
