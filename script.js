function stringChop(str, size) {
  // your code here
	 if (!str) {
    return [];
  }

  let arr = [];
  
  // Loop through the string in chunks of the given size
  for (let i = 0; i < str.length; i += size) {
    // Slice a chunk from the string and push to the array
    let chunk = str.substr(i, size);
    arr.push(chunk);
  }
  
  return arr;
}

// Do not change the code below

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
