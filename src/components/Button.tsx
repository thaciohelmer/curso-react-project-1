import style from '../styles/sass/Button.module.scss'

interface ButtonProps {
  children: any
  onClick?: (value: any) => void
}

export default function Button(props: ButtonProps) {
  return (
    <button className={style.btn} onClick={props.onClick}>
      {props.children}
    </button>
  )
};
