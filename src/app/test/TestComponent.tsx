'use clinet'

'use client'

import React from 'react'
import Hello from '@/components/Hello'
import Button from '@/components/Button/Button'
import ButtonOutlined from '@/components/Button/ButtonOutlined'
import ButtonContained from '@/components/Button/ButtonContained'
import Input from '@/components/common/Inputs/Input'

const TestComponent = () => {
  const onChange = () => {}

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

      <Input
        name="email"
        type="email"
        labelVisible
        label="이메일"
        onChange={(e) => {
          console.log(e)
        }}
      />

      <Input
        name="email"
        type="email"
        label="이메일"
        prefix={<div>아이콘</div>}
        onChange={(e) => {
          console.log(e)
        }}
      />
    </div>
  )
}

export default TestComponent
