import React, { ComponentProps } from 'react'
import Button from './Button'
import classNames from 'classnames'
import styles from './button.module.scss'

type ButtonContained = {} & ComponentProps<typeof Button>

const ButtonContained = ({ type = 'submit', size = 'large', variant = 'contained', ...rest }: ButtonContained) => {
  const containedClasses = classNames(styles.button, styles.primary)

  return <Button className={containedClasses} secondary={false} variant={variant} type={type} size={size} {...rest} />
}

export default ButtonContained
