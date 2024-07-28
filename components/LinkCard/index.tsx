import styles from './style.module.css'
import NextLink from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

interface LinkCardProps {
  title: string
  description: string
  imageUrl: string
  href: string
}

export function LinkCard({ title, description, imageUrl, href }: LinkCardProps) {
  return (
    <NextLink href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </NextLink>
  )
}

interface LinkCardContainerProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function LinkCardContainer({ children, className, style, ...props }: LinkCardContainerProps) {
  return (
    <div className={`${styles.cards} ${className}`} style={style} {...props}>
      {children}
    </div>
  )
}