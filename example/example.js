/* yarn example/ */
import write from '../src'

(async () => {
  const res = await write({
    text: 'example',
  })
  console.log(res)
})()