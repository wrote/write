import makeTestSuite from '@zoroaster/mask'
import TempContext from 'temp-context'
import write from '../../src'

const ts = makeTestSuite('test/result', {
  /**
   * @param {string} input
   * @param {TempContext}
   */
  async getResults(input, { resolve, read }) {
    const f = 'test.data'
    const p = resolve(f)
    await write(p, input)
    const res = await read(f)
    return res
  },
  getThrowsConfig(input) {
    return {
      fn: write,
      args: input,
    }
  },
  context: TempContext,
})

export default ts