// TestComponent.test.js
import { render, screen } from '@testing-library/react'
import TestComponent from '@/components/ui-test'

describe('<TestComponent>', () => {
  it('테스트 컴포넌트가 정상적으로 렌더링되어야 합니다.', () => {
    render(<TestComponent />)
    screen.getByText(/Hello/i)

    // Button 컴포넌트 확인
    const smallSecondaryButton = screen.getByText('small secondary')
    const mediumSecondaryButton = screen.getByText('medium secondary')
    expect(smallSecondaryButton).toBeTruthy()
    expect(mediumSecondaryButton).toBeTruthy()

    // ButtonContained 컴포넌트 확인
    const loginButton = screen.getByText('로그인')
    expect(loginButton).toBeTruthy()

    // ButtonOutlined 컴포넌트 확인
    const signUpButton = screen.getByText('회원가입')
    expect(signUpButton).toBeTruthy()
  })
})
