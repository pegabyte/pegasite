import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AppContent from './AppContent'
import styles from '../styles/App.scss'
import { StickyContainer, Sticky } from 'react-sticky'

export default ({ children }) => (
  <StickyContainer className={styles.rootWrapper}>
    <Sticky className="header" stickyClassName={styles.navigationSticky} topOffset={10}>
      <Header />
    </Sticky>
    <AppContent>
      {children}
    </AppContent>
    <Footer />
  </StickyContainer>
)
