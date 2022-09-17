let number = 378;
let primeArray = new Array();

for(let i=2; i<=number; i++)
{
  if (number % i==0)
  {
    while (number % i==0)
    {
      number = number/i; 
    }
    primeArray.push(i);
  }
}
console.log("Prime factors are "+primeArray);