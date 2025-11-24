const output =["C is fun","Python is cool","JavaScript is amazing"];
let number="";
for (let i=0;i < output.length;i++){
number+=output[i] + (i < output.length -1 ? "\n":"");
} console.log(number);
