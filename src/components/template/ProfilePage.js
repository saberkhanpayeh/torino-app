import React from "react";
import UserSidebar from "../module/UserSidebar";
import ProfileInfo from "../module/ProfileInfo";
import styles from "@/components/template/ProfilePage.module.css"
function ProfilePage() {
  return (
    <div className={styles.container}>
      <UserSidebar />
      <ProfileInfo/>
    </div>
  );
}

export default ProfilePage;
