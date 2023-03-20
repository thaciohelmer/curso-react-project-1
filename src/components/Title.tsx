import styles from '../styles/sass/Global.module.scss'

interface TitleProps {
  children: string
}


export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className={styles['heading-primary']}>{props.children}</h1>
    </div>
  );
}
