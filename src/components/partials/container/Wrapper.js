import React from 'react'
import styles from "@/components/partials/container/Wrapper.module.css"
function Wrapper({children}) {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default Wrapper