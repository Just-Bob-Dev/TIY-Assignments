//build array with first two digits and stop when the last number equals 4000000
var fibonacci = [1, 2];
var c = 0;
// console.log(fibonacci[0]);
// console.log(fibonacci[1]);
  while (c <= 4000000){
    let a = fibonacci[(fibonacci.length) -2];
    let b = fibonacci[(fibonacci.length) -1];
    c = a + b;
    if(c >= 4000000){
      console.log("The last number in the fibonacci sequence: " +fibonacci[(fibonacci.length)-1]);
      break;
    }
    fibonacci.push(c);
  }

var sum = 0;

for(i =0; i < fibonacci.length; i++)
{
    if(fibonacci[i]%2 === 0)
    {
      sum = sum + fibonacci[i];
    }
}
console.log("The sum of all the even numbers: " + sum);
var threeFiveSum = 0;
for(i = 0; i < 1000; i++){
  if(i % 3 === 0 || i % 5 === 0){
    threeFiveSum = threeFiveSum + i;
  }
}
console.log("The sum of all numbers divisible by 3 and 5: " +threeFiveSum);

for(i = 1; i<=100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log(" fizzBuzz ");
  }else if(i % 3 === 0){
    console.log(" fizz ")
  }else if(i % 5 === 0) {
    console.log(" buzz ");
  }else {
    console.log(" " + i + " ");
  }
}
