import React from 'react'
import Hello from '@/components/Hello'
import Button from '@/components/Button/Button'
import ButtonOutlined from '@/components/Button/ButtonOutlined'
import ButtonContained from '@/components/Button/ButtonContained'

const TestComponent = () => {
  return (
    <div style={{ width: '1200px', margin: '20px auto' }}>
      <Hello />
      <Button size="small" secondary>
        small secondary
      </Button>
      <Button size="medium" secondary>
        medium secondary
      </Button>
      <ButtonContained>로그인</ButtonContained>
      <ButtonOutlined>회원가입</ButtonOutlined>
    </div>
  )
}

export default TestComponent
