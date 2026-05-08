function test() { 
    var a = 10; 
    if (true) { 
        var a = 20; 
        // Same variable (no block scope) 
        console.log(a); // Output: 20 
        } console.log(a); // Output: 20 
        } test();

        // types of variables in js
         /* there are three types of variables in js
         1. var 
             var is defined as the old way function scope 
         2. let
           let is defined as MODERN WAY
        3. const
            For constants (block-scoped and cannot be reassigned)