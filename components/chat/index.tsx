import styles from './index.module.css'
import Link from 'next/link'

export default function EmbeddedSite() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.iframeContainer}>
        <iframe
          src="https://www.doubao.com/chat/"
          className={styles.iframe}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
