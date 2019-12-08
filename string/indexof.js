// IndexOf method return first instance location

String.prototype._indexOf = function(searchString) {
  var pointer = -1,
    searchStringCharLoc = 0;
  if(this.length === 0 || searchString.length === 0) {
    return -1;
  }
  for(var i=0; i<this.length; i++) {
    if(this[i] === searchString[searchStringCharLoc]) {
      if(pointer === -1) {
        pointer = i;
      }
      if(searchStringCharLoc === searchString.length - 1) {
        break;
      }
      searchStringCharLoc ++;
    } else {
      pointer = -1;
      searchStringCharLoc = 0;
    }
  }
  return pointer;
}

// Implement
const input = "Hello World !";
console.log(input._indexOf("ll"));