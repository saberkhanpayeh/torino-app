import React, { Suspense } from "react";
import UserSidebar from "@/components/module/UserSidebar";
import ProfileInfo from "@/components/module/ProfileInfo";
import PageLayout from "@/components/partials/container/PageLayout";
function ProfilePage() {
  return (
    <PageLayout page="profile">
      <UserSidebar />
      <ProfileInfo />
    </PageLayout>
  );
}

export default ProfilePage;
