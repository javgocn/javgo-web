import styles from './index.module.css'
import Link from 'next/link'

export default function GptChat() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.iframeContainer}>
        <iframe
          src="https://chatgpt.com/"
          className={styles.iframe}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
