let per1={
name:'ani',
age:'20',
msrkd:'50'
}
let per2='avi';
per2.name=per1;;
console.log("per1....",per1);

console.log("per2....",per2);
/* A shallow copy copies only the first level of an object.
Nested objects still share the same reference.*/