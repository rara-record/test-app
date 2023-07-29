import Button from '@/components/Button/Button'
import ButtonContained from '@/components/Button/ButtonContained'
import ButtonOutlined from '@/components/Button/ButtonOutlined'
import Hello from '@/components/Hello'
import React from 'react'

const Home = () => {
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

export default Home
