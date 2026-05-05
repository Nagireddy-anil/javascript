// removing dupliacte arr using spread operator
let arr = ['1','2','3','1','4','5','2','3'];
let dupi = [...new Set(arr)];
console.log(dupi);