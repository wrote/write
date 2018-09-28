/* yarn example/ */
import TempContext from 'temp-context'
/* start example */
import write from '../src'

const Write = async (path) => {
  await write(path, '> example-data')
  console.log('Written data to %s:', path)
}

/* end example */

(async () => {
  const t = new TempContext()
  t.TEMP = 'example/temp'
  await t._init()
  await Write(t.resolve('example.txt'))
  const res = await t.read('example.txt')
  console.log(res)
  await t._destroy()
})()