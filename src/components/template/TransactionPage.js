import React from "react";
import PageLayout from "@/components/partials/container/PageLayout";
import UserSidebar from "@/components/module/UserSidebar";
import UserTransaction from "@/components/module/UserTransaction";

function TransactionPage() {
  return (
    <PageLayout page="transactions">
      <UserSidebar />
      <UserTransaction/>
    </PageLayout>
  );
}

export default TransactionPage;
