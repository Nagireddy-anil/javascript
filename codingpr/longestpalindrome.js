function longpali(str){
    let longest="";
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            let sub=str.substring(i,j+1);
            if(sub==sub.split('').reverse().join('')){
                if(sub.length>longest.length){
                    longest=sub;
                }
            }
        }
    }
    return longest;
}
console.log(longpali("anillinamambab"));
