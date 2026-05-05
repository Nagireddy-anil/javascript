
//merging arr usimg spread operator
/*let arr=['anil','sunil','chinna','abi'];
let arr2=['krthik','nikhesh','minnu','chandu'];
let arr3=[...arr,...arr2];
console.log(arr3);*/
// spread operator should like this ...

// removing dupliacte arr using spread operator
let arr = ['1','2','3','1','4','5','2','3'];
let dupi = [...new Set(arr)];
console.log(dupi);