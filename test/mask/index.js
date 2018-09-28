import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import write from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await write({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts