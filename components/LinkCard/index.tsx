import styles from './style.module.css'
import NextLink from 'next/link'
import {ComponentProps, ReactNode, useEffect, useState} from 'react'

async function fetchLinkMetadata(url: string) {
    try {
        const response = await fetch(`/api/fetch-metadata?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        return {
            title: data.title || '-',
            description: data.description || '-',
            imageUrl: data.image || '/site/default-linkcard.png',
        };
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return {
            title: 'Error',
            description: 'Could not fetch metadata',
            imageUrl: 'default-image.png',
        };
    }
}

interface LinkCardProps {
  href: string
}

export function LinkCard({ href }: LinkCardProps) {
    const [metadata, setMetadata] = useState({
        title: 'Loading...',
        description: 'Fetching description...',
        imageUrl: '',
    });

    useEffect(() => {
        async function loadMetadata() {
            const data = await fetchLinkMetadata(href);
            setMetadata(data);
        }
        loadMetadata();
    }, [href]);

    return (
        <NextLink href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={metadata.imageUrl} alt={metadata.title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <span className={styles.title}>{metadata.title}</span>
                <span className={styles.description}>{metadata.description}</span>
            </div>
        </NextLink>
    );
}

interface LinkCardContainerProps extends ComponentProps<'div'> {
  children: ReactNode
}

interface LinkCardContainerProps {
    children: ReactNode
    className?: string
    style?: React.CSSProperties
}

export function LinkCardContainer({ children, className, style, ...props }: LinkCardContainerProps) {
  return (
    <div className={`${styles.cards} ${className}`} style={style} {...props}>
      {children}
    </div>
  )
}
