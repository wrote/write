const { createWriteStream } = require('fs');
let erotic = require('erotic'); if (erotic && erotic.__esModule) erotic = erotic.default;

/**
 * Write a file to the filesystem.
 * @param {string} path The path of the file to write.
 * @param {string|Buffer} data The data to write.
 */
               async function write(path, data) {
  if (!path) throw new Error('No path is given.')
  const er = erotic(true)
  const ws = createWriteStream(path)
  await new Promise((r, j) => {
    ws
      .on('error', (e) => {
        const err = er(e)
        j(err)
      })
      .on('close', r)
      .end(data)
  })
}

module.exports = write