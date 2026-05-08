function prime(num){
    if (num <2){
        return false;
    }
    for (let i=2;i<num;i++){
        if(num % i ==0){
            return false;
        }
    }
    return true;
}
let arr = [1,2,3,4,5];
for(let i=0 ;i<arr.length;i++){
    if (prime(arr[i])) {
    console.log(arr[i]);
  }
}