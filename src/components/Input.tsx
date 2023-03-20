import style from '../styles/sass/Input.module.scss'

interface InputProps {
  text: string
  type?: 'text' | 'number'
  value: any
  readonly?: boolean
  onChange?: (valor: any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className={style['form-group']}>
      <label className={style.label}>{props.text}</label>
      <input
        className={style.input}
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.readonly}
        onChange={e => props.onChange?.(e.target.value)}
      />
    </div>
  )
};
