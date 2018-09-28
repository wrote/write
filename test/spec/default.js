import { equal, ok, throws } from 'zoroaster/assert'
import TempContext from 'temp-context'
import write from '../../src'

/** @type {Object.<string, (c: TempContext)>} */
const T = {
  context: TempContext,
  'is a function'() {
    equal(typeof write, 'function')
  },
  async 'throws with correct stack when not-writable'({ TEMP }) {
    const test = async () => {
      await write(TEMP, 'd')
    }
    await throws({
      fn: test,
      code: 'EISDIR',
      stack(s) {
        ok(/at test/.test(s))
      },
    })
  },
}

export const path = {
  async 'throws when no path is given'() {
    await throws({
      fn: write,
      message: 'No path is given.',
    })
  },
}

export default T