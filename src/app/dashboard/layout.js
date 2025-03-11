import AuthProvider from "@/components/partials/provider/AuthProvider";
import React, { Suspense } from "react";

function DashboardLayout({ children }) {
  return (
    <div>
      {/* <Suspense fallback={<p>...suspensLoading</p>}> */}
        <AuthProvider>{children}</AuthProvider>
      {/* </Suspense> */}
    </div>
  );
}

export default DashboardLayout;
