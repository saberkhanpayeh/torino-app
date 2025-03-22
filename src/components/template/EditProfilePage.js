import React from "react";
import UserSidebar from "../module/UserSidebar";
import EditProfile from "../module/EditProfile";
import PageLayout from "../partials/container/PageLayout";

function EditProfilePage() {
  return (
    <PageLayout page="edit-profile">
      <UserSidebar />
      <EditProfile />
    </PageLayout>
  );
}

export default EditProfilePage;
