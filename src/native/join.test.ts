import { type Join, join } from './join.js'

namespace TypeTests {
  type test = Expect<
    Equal<Join<['some', 'nice', 'string'], ' '>, 'some nice string'>
  >
}

describe('join', () => {
  test('should join words in both type level and runtime level', () => {
    const result = join(['a', 'b', 'c'], '-')
    expect(result).toEqual('a-b-c')
    type test = Expect<Equal<typeof result, 'a-b-c'>>
  })

  test('should join only at runtime level when type is wide', () => {
    const data = ['a', 'b', 'c']
    const result = join(data, '-')
    expect(result).toEqual('a-b-c')
    type test = Expect<Equal<typeof result, string>>
  })
})
