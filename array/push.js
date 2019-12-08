// Push functionality
Array.prototype._push = function(param) {
  this[this.length] = param;
  return this.length;
}

// implementation
const input = [11, 22, 33, 44, 55, 66];
const output = input._push(77)
console.log(input, output);