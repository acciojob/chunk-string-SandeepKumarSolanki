function stringChop(str, size) {
  // your code here
	let arr = [];
	for(let i = 0 ; i<str.length ; i=i+size){
		if(size > str.length){
			arr.push(str.substr(i, str.length))
		}
		let subStr = "";
		subStr = slice(i,size);
		arr.push(subStr);
	}
	return arr;
}

// Do not change the code below

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
