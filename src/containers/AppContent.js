import React from 'react'
import styles from '../styles/App.scss'

const AppContent = ({ children }) => (
  <div className={styles.appContent}>
    {children}
  </div>
)

export default AppContent
