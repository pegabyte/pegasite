import React from 'react'
import AndroidSend from 'react-icons/lib/io/android-send'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
import MediaQuery from 'react-responsive'
import GoFileMedia from 'react-icons/lib/go/file-media'

export default () => (
  <div className={styles.appContent}>
    <div className={styles.container}>
      <Section sm>
        <div className={styles.hero}>
          <h1>Unauthorized</h1>
          <p>
            Request access via e-mail at
            {' '}
            <a href="mailto:sam@pegabyte.com">sam@pegabyte.com</a>
          </p>
        </div>
      </Section>
    </div>
  </div>
)
