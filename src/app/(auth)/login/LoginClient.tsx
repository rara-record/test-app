'use client'

import Image from 'next/image'
import LogoPath from '@/assets/logo.svg'
import { useState } from 'react'

const LoginClient = () => {
  const [value, setValue] = useState('')

  return (
    <section>
      <div>
        <h1>
          <Image src={LogoPath} alt="logo" />
        </h1>

        <form action="">
          {/* input */}
          <div>{/* 자동 로그인, 비밀번호 수정 */}</div>
          <div>{/* 버튼 */}</div>
        </form>
      </div>
    </section>
  )
}

export default LoginClient
