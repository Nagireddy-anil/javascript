let ar = ['anil','sunil','abi','karthik','jashu','bhargav','naveen','nikhesh'];
let name='chandu';
let found=false;
for (let i = 0; i < ar.length; i++) {
    if (ar[i] === name) {
        found = true;
        break;
    }
}
if (found === false) {
    console.log(name + " is missing");
} else {
    console.log(name + " is present");
}