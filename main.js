//build array with first two digits and stop when the last number equals 4000000
var fibonacci = [1, 2];
var c = 0;
console.log(fibonacci[0]);
console.log(fibonacci[1]);
  while (c <= 4000000){
    let a = fibonacci[(fibonacci.length) -2];
    let b = fibonacci[(fibonacci.length) -1];
    c = a + b;
    if(c >= 4000000){
      break;
    }
    fibonacci.push(c);
    console.log(c);
    }

var sum = 0;

for(i =0; i < fibonacci.length; i++)
{
    if(fibonacci[i]%2 === 0)
    {
      sum = sum + fibonacci[i];
      console.log(sum);
    }
}
