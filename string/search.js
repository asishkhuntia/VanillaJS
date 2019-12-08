// search() method return first instance location
// Regex yet to Implement

String.prototype._indexOf = function(searchString) {
  var pointer = -1,
    searchStringCharLoc = 0;
  if(this.length === 0 || searchString.length === 0) {
    return -1;
  }
  
  return pointer;
}

// Implement
const input = "Hello World !";
console.log(input._indexOf("ll"));