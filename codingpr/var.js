function test() { 
    var a = 10; 
    if (true) { 
        var a = 20; 
        // Same variable (no block scope) 
        console.log(a); // Output: 20 
        } console.log(a); // Output: 20 
        } test();