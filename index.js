var inherits = require('inherits');
var Readable = require('readable-stream').Readable;
var extend = require('xtend');

module.exports = ReadStream;
inherits(ReadStream, Readable);

function ReadStream(iterator, options){
  if (!(this instanceof ReadStream)) return new ReadStream(iterator, options);
  Readable.call(this, extend(options, {
    objectMode: true
  }));
  this._iterator = iterator;
  this.on('end', this._onend.bind(this));
}

ReadStream.prototype._read = function(){
  var self = this;

  this._iterator.next(function(err, key, value){
    if (err) return self.emit('error', err);
    if (key === undefined && value === undefined) {
      self.push(null);
    } else {
      self.push({ key: key, value: value });
    }
  });
};

ReadStream.prototype._onend = function(){
  var self = this;
  this._iterator.end(function(err){
    if (err) return self.emit('error', err);
    self.emit('close');
  });
};

