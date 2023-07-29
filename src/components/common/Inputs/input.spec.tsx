const context = describe

describe('<Input />', () => {
  it('input에 focus를 두었을 때, border-bottom이 파란색으로 활성화 된다.', () => {})

  it(' focus out했을 때, 유효성이 통과되지 않을 경우, bottom이 빨간색으로 활성화 된다.', () => {})

  context('<InputEmail />', () => {
    it('이메일 인풋은 "@"이 포함되어야 한다.', () => {})

    it('이메일 인풋은 "@"을 입력하면, 이메일 자동 완성이 된다.', () => {})
  })

  context('<InputPassword />', () => {
    it('비밀번호는 특수문자를 포함한 8자리 이상이다.', () => {})

    it(' (눈아이콘)을 클릭하면, 비밀번호가 표시된다.', () => {})
  })
})
