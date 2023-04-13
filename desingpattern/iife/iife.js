/* The template for an IIFE consists of an
anonymous function declaration, inside a set 
of parenthesis (whichs turn the definition into a 
function expression, or an an assignment) 
and then a set of calling parenthesis at the end tail of it:
*/

(function () {
    var x = 20;
    var y = 20.
    var answer = x + y
    console.log(answer);

}());
 
/*
(function(/*parms) {

}())*/

// Use Cases []:

// Emulating Static Variable //
    
    