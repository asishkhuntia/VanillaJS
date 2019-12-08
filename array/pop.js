// Pop functionality
Array.prototype._pop = function() {
  let tmp = this[this.length - 1];
  this.length = this.length - 1;
  return tmp;
}

// implementation
const input = [11, 22, 33, 44, 55, 66];
const output = input._pop()
console.log(input, output);

// 2nd pop
console.log(input, input._pop());