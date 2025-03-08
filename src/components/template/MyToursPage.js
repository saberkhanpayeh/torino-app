import React from 'react'
import PageLayout from '../partials/container/PageLayout'
import UserSidebar from '../module/UserSidebar'
import MyToursList from '../module/MyToursList'

function MyToursPage() {
  return (
    <PageLayout>
        <UserSidebar style={{marginLeft:"18px"}}  />
        <MyToursList/>
    </PageLayout>
  )
}

export default MyToursPage