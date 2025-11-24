const arg=process.argv[2];
let num= Number(arg);

if (isNaN(num)){
console.log("Not a number ");
} else {
console.log("My number: "+num);
}

