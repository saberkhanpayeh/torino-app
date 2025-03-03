import React from 'react'
import styles from "@/components/partials/container/PageLayout.module.css"
function PageLayout({children}) {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default PageLayout