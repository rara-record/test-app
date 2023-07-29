import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm, ValidationMode } from 'react-hook-form'
import styles from './Validationform.module.scss'

interface SubmitAreaProps<T> {
  formSchema: z.ZodSchema<T>
  onSubmit: (values: FieldValues) => void
  mode?: keyof ValidationMode

  children: (payload: any) => React.ReactNode
}

const ValidatedForm = <T extends unknown>({ formSchema, onSubmit, mode = 'onChange', children, ...rest }: SubmitAreaProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: mode,
    resolver: zodResolver(formSchema),
  })

  const props = {
    register,
    handleSubmit,
    isValid,
    errors,
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} {...rest}>
      {children(props)}
    </form>
  )
}

export default ValidatedForm
