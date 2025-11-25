const num = parseInt(process.argv[2]);
function factorial(i) {
if (isNaN(i)) {
return 1;
} if (i<=1) {
return 1;
} 
return i*factorial(i-1); 
}
console.log(factorial(num));
