// reduce function

Array.prototype._reduce = function(callback) {
  let total = 0;
  for(let i=0; i<this.length; i++) {
    total = callback(this[i], total);
  }
  return total;
}

//implementation
const response = [1, 2, 3, 4, 5]._reduce((item, total) => {
  return total + item;
});
console.log(response);