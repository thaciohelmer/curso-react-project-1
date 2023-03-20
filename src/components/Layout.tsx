import Title from "./Title";
import styles from '../styles/sass/Layout.module.scss'

interface LayoutProps {
  title: string
  children?: any
}


export default function Layout(props: LayoutProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <Title>{props.title}</Title>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__content}>{props.children}</div>
      </div>
    </div>
  )
}
