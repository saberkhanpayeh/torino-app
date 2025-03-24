import React from "react";
import UserSidebar from "@/components/module/UserSidebar";
import EditProfile from "@/components/module/EditProfile";
import PageLayout from "@/components/partials/container/PageLayout";

function EditProfilePage() {
  return (
    <PageLayout page="edit-profile">
      <UserSidebar />
      <EditProfile />
    </PageLayout>
  );
}

export default EditProfilePage;
