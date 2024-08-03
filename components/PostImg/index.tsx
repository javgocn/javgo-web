import React, { useState } from 'react';
import styles from './style.module.css';

interface PostImgProps {
    src: string;
}

export default function PostImg({ src }: PostImgProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <img
                src={src}
                alt="Post Image"
                className={styles.postImg}
                onClick={toggleModal}
            />
            {isOpen && (
                <div className={styles.modal} onClick={toggleModal}>
                    <span className={styles.close}>&times;</span>
                    <img src={src} alt="Zoomed Post Image" className={styles.zoomedImg} />
                </div>
            )}
        </>
    );
}