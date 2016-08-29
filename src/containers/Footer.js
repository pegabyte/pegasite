import React from 'react'
import styles from '../styles/App.scss'
import { Link } from 'react-router'

export default () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.copyright}>Copyright &copy; Pegabyte LLC</p>
      <ul className={styles.bulletList}>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/careers">Jobs</Link></li>
        <li><Link to="/press">Press Kit</Link></li>
        <li><Link to="/legal">Legal</Link></li>
      </ul>
    </div>
  </footer>
)
