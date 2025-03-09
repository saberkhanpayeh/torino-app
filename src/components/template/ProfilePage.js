import React, { Suspense } from "react";
import UserSidebar from "../module/UserSidebar";
import ProfileInfo from "../module/ProfileInfo";
import styles from "@/components/template/ProfilePage.module.css";
import PageLayout from "../partials/container/PageLayout";
function ProfilePage() {
  return (
    <PageLayout>
      <UserSidebar />
      <ProfileInfo />
    </PageLayout>
  );
}

export default ProfilePage;
