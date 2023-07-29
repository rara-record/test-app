'use client'

import classNames from 'classnames'
import React, { ChangeEvent, ReactNode, useState } from 'react'
import styles from './Input.module.scss'

interface IInputProps {
  name: string
  type: 'email' | 'password' | 'number' | 'text'
  prefix?: ReactNode
  suffix?: ReactNode
  label?: string
  labelVisible?: boolean
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  value?: string
  error?: { message: string }
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  [x: string]: any
}

const Input = ({ id, type = 'text', prefix, suffix, label, name = '', labelVisible, placeholder = '', readOnly, disabled, value, error: errorProp, className = '', onChange, ...rest }: IInputProps) => {
  const [inputValue, setInputValue] = useState(value ? value : '')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange(e)
  }

  return (
    <div className={classNames(styles.formControl, className)}>
      <label htmlFor={name} className={classNames(styles.label, labelVisible || styles.labelHidden)}>
        {label}
      </label>

      <div className={classNames(styles.inputWrapper, errorProp && styles.inputWrapperError)}>
        {prefix && prefix}
        <input //
          id={name}
          type={type}
          name={name}
          className={classNames(styles.input)}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          {...rest}
        />
        {suffix && suffix}
      </div>

      {errorProp && (
        <span role="alert" className={styles.error}>
          {errorProp.message}
        </span>
      )}
    </div>
  )
}

export default Input
