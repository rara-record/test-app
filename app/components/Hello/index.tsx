'use client'

import React from 'react'
import styled from '@emotion/styled'

const Hello = () => {
  return <StyleHelloContainer>Hello, Next JS!</StyleHelloContainer>
}

const StyleHelloContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: skyblue;
`

export default Hello
