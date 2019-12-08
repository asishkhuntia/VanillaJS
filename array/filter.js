// [1,2,3].filter(item => item > 2)

Array.prototype._filter = function (callback) {
  const output = [];
  for(let item of this) {
    if(callback(item)) {
      output.push(item);
    }
  }
  return output;
}


//implementation
const response = [1,2,3,4,5]._filter((item) => {
  return item > 2
});
console.log(response);