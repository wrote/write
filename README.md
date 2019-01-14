# @wrote/write

[![npm version](https://badge.fury.io/js/%40wrote%2Fwrite.svg)](https://npmjs.org/package/@wrote/write)

`@wrote/write` is a package to write a file to the filesystem.

```sh
yarn add -E @wrote/write
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async write(path: string, data?: string|Buffer)`](#async-writepath-stringdata-stringbuffer-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import write from '@wrote/write'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `async write(`<br/>&nbsp;&nbsp;`path: string,`<br/>&nbsp;&nbsp;`data?: string|Buffer,`<br/>`): void`

Write data to a file on the filesystem.

```js
import write from '@wrote/write'

const Write = async (path) => {
  await write(path, '> example-data')
  console.log('Written data to %s:', path)
}
```
```
Written data to example/temp/example.txt:
> example-data
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Wrote][1] 2019

[1]: https://wrote.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>