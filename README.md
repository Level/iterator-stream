
# level-iterator-stream

  Turn a leveldown iterator into a readable stream

## Example

```js
var iteratorStream = require('level-iterator-stream');
var leveldown = require('leveldown');

var db = leveldown(__dirname + '/db');
db.open(function(err){
  if (err) throw err;

  var stream = iteratorStream(db.iterator());
  stream.on('data', function(kv){
    console.log('%s -> %s', kv.key, kv.value);
  });
});
```

## Installation

```bash
$ npm install level-iterator-stream
```

## API

### iteratorStream(iterator[, options])

  Create a readable stream from `iterator`. `options` are passed down to the
  `require('readable-stream').Readable` constructor, with `objectMode` forced
  to `true`.

  For each key/value pair found, an object with `{ key, value }` will be
  emitted.

  When the stream ends, the `iterator` will be closed and afterwards a
  `"close"` event emitted.

## License

  MIT

