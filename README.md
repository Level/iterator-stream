# level-iterator-stream

> Turn a leveldown iterator into a readable stream

[![level badge][level-badge]](https://github.com/level/awesome)
[![Build Status](https://travis-ci.org/Level/iterator-stream.png)](https://travis-ci.org/Level/iterator-stream)

## Usage

```js
var iteratorStream = require('level-iterator-stream')
var leveldown = require('leveldown')

var db = leveldown(__dirname + '/db')
db.open(function (err) {
  if (err) throw err

  var stream = iteratorStream(db.iterator())
  stream.on('data', function (kv) {
    console.log('%s -> %s', kv.key, kv.value)
  })
})
```

## Installation

```bash
$ npm install level-iterator-stream
```

## API

### `stream = iteratorStream(iterator[, options])`

Create a readable stream from `iterator`. `options` are passed down to the `require('readable-stream').Readable` constructor, with `objectMode` forced to `true`.

Set `options.keys` or `options.values` to `false` to only get values / keys. Otherwise receive `{ key, value }` objects.

When the stream ends, the `iterator` will be closed and afterwards a `"close"` event emitted.

`.destroy()` will force close the underlying iterator.

## License

Copyright &copy; 2012-present `level-iterator-stream` contributors.

`level-iterator-stream` is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included `LICENSE.md` file for more details.

[level-badge]: http://leveldb.org/img/badge.svg
