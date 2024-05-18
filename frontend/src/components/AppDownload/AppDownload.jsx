import React from 'react'
import styles from "./AppDownload.module.css"
import {assets} from "../../assets/assets"
const AppDownload = () => {
  return (
    <div className={styles.appDownload} id='mobile-app'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className={styles.appDownloadPlateforms}>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
