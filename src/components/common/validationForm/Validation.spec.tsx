import { z } from 'zod'
import Input from '@/components/common/Inputs/Input'
import { ChangeEvent } from 'react'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'
import ValidatedForm from './ValidationForm'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

const exampleSchema = z.object({
  email: z.string().min(1, { message: '아이디(이메일)를 입력해주세요.' }).email({ message: '아이디(이메일)는 이메일 형식으로 입력해주세요.' }),
  password: z.string().min(8, { message: '비밀번호는 영문/숫자/특수문자 2가지 이상 조합(8~20자).' }).max(20),
})

const onSubmitMock = jest.fn()

interface ITestComponent {
  register: UseFormRegister<FieldValues>
  errors: Partial<FieldErrorsImpl<{ email: string; password: string }>>
}

const TestComponent = ({ register, errors }: ITestComponent) => {
  return (
    <>
      <input type="email" placeholder="email" {...register('email')} data-testid="email-input" />
      {errors.email && <span data-testid="email-input">{errors.email.message}</span>}

      <input type="password" placeholder="password" {...register('password')} data-testid="password-input" />
      {errors.password && <span data-testid="password-input">{errors.password.message}</span>}

      <button type="submit" data-testid="submit-button">
        Submit
      </button>
    </>
  )
}

const email = 'bora@bora.com'
const password = '123456789!!'

describe('<ValidationForm />', () => {
  afterEach(() => {
    onSubmitMock.mockClear()
  })

  it('유효한 데이터로 "form"을 제출한다.', async () => {
    render(
      <ValidatedForm formSchema={exampleSchema} onSubmit={onSubmitMock}>
        {(props) => <TestComponent {...props} />}
      </ValidatedForm>
    )

    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: email },
    })

    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: password },
    })

    fireEvent.click(screen.getByTestId('submit-button'))

    await waitFor(() => {
      const received = onSubmitMock.mock.calls[0][0]

      expect(received.email).toBe(email)
      expect(received.password).toBe(password)
    })
  })
})
