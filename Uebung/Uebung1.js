

function fib(n){
    if(n==1 || n==0)
        return 1
    else
        return fib(n-1)+fib(n-2)
}

for (n = 0; fib(n) < 200; n++ )
// console.log("Fib( "+n+" ) ist : "+fib(n))
console.log("Fibonacci ist: " +fib(n) +" ( Durchlauf: " +n+" )" )