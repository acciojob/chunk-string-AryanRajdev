function stringChop(str, size) {
  // your code here
	let arr = [];
	let i = 0;
	size = Number(size);
	while((i+size)<str.length){
		let s = str.slice(i,i+size);
		arr.push(s);
		i = i+size;
	}

	if(i<str.length){
		arr.push(str.slice(i,str.length));
	}

	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
