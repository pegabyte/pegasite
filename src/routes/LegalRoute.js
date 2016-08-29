import React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
import MdCheck from 'react-icons/lib/md/check'
import terms from '../data/terms.md'
import privacy from '../data/privacy.md'

export default () => (
  <div className={styles.appContent}>
    <div className={styles.container}>
      <Section>
        <div className={styles.hero}>
          <h1>Legal</h1>
          <p>
            This page is absolutely serious.
          </p>
        </div>
      </Section>
      <div dangerouslySetInnerHTML={{ __html: terms }} />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: privacy }} />
    </div>
  </div>
)
