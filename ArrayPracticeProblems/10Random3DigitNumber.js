let randomArray = new Array();
let value;
for (let i=1; i<11; i++)
{
  value = Math.floor(Math.random()*999);
  if(value<100)
    value +=100;
  console.log(i+". Random 3 Digit is "+value);
  randomArray.push(value);
}
console.log(randomArray);