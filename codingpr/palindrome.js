function palndrome(str) {
    let rev = str.split('').reverse().join('');
    return str === rev;
}

console.log(palndrome("madam")); 
/* plindrome means if we check the input it soulb be same in reverse order ,if it is not same 
in reverse it false*/