// Map function

Array.prototype._map = function(callback) {
  const output = [];
  for(let i=0; i<this.length; i++) {
    output.push(callback(this[i]));
  }
  return output;
}


// implementation
const response = ['test', 'data', 'one', 'two']._map(item => {
  return "Hello " + item;
});
console.log(response);