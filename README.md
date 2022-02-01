# level-iterator-stream

**Turn an [abstract-leveldown](https://github.com/Level/abstract-leveldown) iterator into a readable stream.**

> :pushpin: Only compatible with `abstract-leveldown`. For `abstract-level` please see [`level-read-stream`](https://github.com/Level/read-stream).

[![level badge][level-badge]](https://github.com/Level/awesome)
[![npm](https://img.shields.io/npm/v/level-iterator-stream.svg)](https://www.npmjs.com/package/level-iterator-stream)
[![Node version](https://img.shields.io/node/v/level-iterator-stream.svg)](https://www.npmjs.com/package/level-iterator-stream)
[![Test](https://img.shields.io/github/workflow/status/Level/iterator-stream/Test?label=test)](https://github.com/Level/iterator-stream/actions/workflows/test.yml)
[![Coverage](https://img.shields.io/codecov/c/github/Level/iterator-stream?label=&logo=codecov&logoColor=fff)](https://codecov.io/gh/Level/iterator-stream)
[![Standard](https://img.shields.io/badge/standard-informational?logo=javascript\&logoColor=fff)](https://standardjs.com)
[![Common Changelog](https://common-changelog.org/badge.svg)](https://common-changelog.org)
[![Donate](https://img.shields.io/badge/donate-orange?logo=open-collective\&logoColor=fff)](https://opencollective.com/level)

## Usage

_If you are upgrading: please see [UPGRADING.md](UPGRADING.md)._

```js
const iteratorStream = require('level-iterator-stream')
const leveldown = require('leveldown')

const db = leveldown(__dirname + '/db')

db.open(function (err) {
  if (err) throw err

  const stream = iteratorStream(db.iterator())
  stream.on('data', function (kv) {
    console.log('%s -> %s', kv.key, kv.value)
  })
})
```

## Install

With [npm](https://npmjs.org) do:

```
npm install level-iterator-stream
```

## API

### `stream = iteratorStream(iterator[, options])`

Create a readable stream from `iterator`. The `options` are passed down to the `require('readable-stream').Readable` constructor, with `objectMode` forced to `true`. Set `options.keys` or `options.values` to `false` to only get keys or values. Otherwise receive `{ key, value }` objects.

Upon stream end or `.destroy()` the `iterator` will be closed after which a `close` event is emitted on the stream.

## Contributing

[`Level/iterator-stream`](https://github.com/Level/iterator-stream) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## License

[MIT](LICENSE)

[level-badge]: https://leveljs.org/img/badge.svg
