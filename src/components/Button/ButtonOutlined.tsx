import React, { ComponentProps } from 'react'
import Button from './Button'
import classNames from 'classnames'
import styles from './button.module.scss'

type ButtonOutlined = {} & ComponentProps<typeof Button>

const ButtonOutlined = ({ type = 'submit', size = 'large', variant = 'outlined', ...rest }: ButtonOutlined) => {
  const containedClasses = classNames(styles.button, styles.secondary, styles.outlined)

  return <Button className={containedClasses} variant={variant} type={type} size={size} {...rest} />
}

export default ButtonOutlined
