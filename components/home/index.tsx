import React from 'react';
import styles from './index.module.css';

export default function HomePage() {
    const handleQuickStartClick = () => {
        window.location.href = '/guid';
    };

    const handleNavigationClick = () => {
        window.location.href = '/navigate';
    };

    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}></div>
            <h1 className={styles.title}>Journey Through Code: Documenting Daily Development Adventures</h1>
            <h2 className={styles.subtitle}>Persist in Exploration and Creation, for Every Line of Code Brings You
                Closer to Mastery and Innovation.</h2>
            <div className={styles.buttons}>
                <button onClick={handleQuickStartClick} className={`${styles.button} ${styles.quickStart}`}>Quick Start</button>
                <button onClick={handleNavigationClick} className={`${styles.button} ${styles.nav}`}>Navigation</button>
            </div>
        </div>
    );
};