import React, { CSSProperties, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './button.module.scss'

type TButtonType = 'submit' | 'button' | 'reset'

type TButton = {
  type?: TButtonType
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  variant?: 'outlined' | 'contained'
  secondary?: boolean
  style?: CSSProperties
  className?: string
}

const Button = ({ type = 'submit', size = 'medium', variant, secondary = false, style, className, children, ...rest }: PropsWithChildren<TButton>) => {
  const composeClasses = classNames(styles.button, styles[size], styles.valiant, secondary ? styles.secondary : styles.primary, className ? className : null)

  return (
    <button className={composeClasses} type={type} style={{ ...style }} {...rest}>
      {children}
    </button>
  )
}

export default Button
