import React from 'react'
import IoAndroidSend from 'react-icons/lib/io/android-send'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
import shuffle from 'lodash/shuffle'
import MediaQuery from 'react-responsive'

export default () => (
  <div className={styles.appContent}>
    <div className={styles.container}>
      <Section>
        <div className={styles.hero}>
          <h1>Receive Estimate</h1>
          <p>Please fill out the form below for your <strong>free</strong> project consultation.</p>
        </div>

        <form className={styles.formGapped}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input type="text" className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input type="email" className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Describe Your Project</label>
            <textarea
              placeholder="eg. A mobile app that notifies you of new movies in theaters"
              rows="10"
              className={styles.formTextarea}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Are You Human?</label>
            <select defaultValue="" className={styles.formSelect}>
              <option value="" disabled>–––––</option>
              {shuffle([
                <option key="shuffle1" value="beep-boop">Beep Boop</option>,
                <option key="shuffle2" value="destroy-humans">Woof Woof</option>,
                <option key="shuffle3" value="meow">Meow</option>,
                <option key="shuffle4" value="yes">Sure</option>,
              ])}
            </select>
          </div>
          <MediaQuery minWidth={600}>
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.btnLgPrimary}>
                <IoAndroidSend />
                Done
              </button>
            </div>
          </MediaQuery>
        </form>
      </Section>
    </div>
    <MediaQuery maxWidth={601}>
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.btnLgPrimary}>
          <IoAndroidSend />
          Done
        </button>
      </div>
    </MediaQuery>
  </div>
)
