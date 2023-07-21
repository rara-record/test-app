import { render, screen } from '@testing-library/react'
import Hello from '@/app/components/Hello'

test('Hello', () => {
  render(<Hello />)

  screen.getByText('Hello, Next JS!')
})
