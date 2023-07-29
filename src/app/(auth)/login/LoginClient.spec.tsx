import { render, screen } from '@testing-library/react'
import LoginClient from './LoginClient'

describe('<LoginClient>', () => {
  it('로그인 페이지가 성공적으로 렌더링 된다.', () => {
    render(<LoginClient />)
    const logo = screen.getByAltText('logo')
    expect(logo).toBeInTheDocument()
  })
})
