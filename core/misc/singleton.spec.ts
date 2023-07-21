import { Singleton } from './singleton'

describe('singleton', () => {
  it('하나의 인스턴스만을 생성한다', () => {
    @Singleton
    class Item {
      name: string = ''
    }

    const item1 = new Item()
    item1.name = 'hello'

    const item2 = new Item()
    expect(item2.name).toEqual('hello')
  })
})

export {}
