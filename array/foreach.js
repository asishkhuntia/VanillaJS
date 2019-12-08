// forEach function
Array.prototype._forEach = function (callback) {
  for(let i=0; i<this.length; i++) {
    this[i] = callback(this[i]);
  }
}

//implementation
const list = [1,2,3,4,5];
list._forEach((item) => {
  return item * 7;
});

console.log(list);