// substring function

String.prototype._substring = function(start, end) {
  let output = '';
  if(!start) {
    start = 0;
  }
  if(!end) {
    end = this.length;
  }
  if(start >= end) {
    return output;
  }
  for(let i=start; i<end; i++) {
    output += this[i];
  }
  return output
}

// Implementation
const input = "Hello World !";
console.log(input._substring(3, 5));