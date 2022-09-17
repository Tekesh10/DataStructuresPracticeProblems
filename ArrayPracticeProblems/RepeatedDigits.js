arr = new Array();
for(let number=1; number<100; number++)
{
  if(number % 11 == 0)
  {
    arr.push(number);
  }
}
console.log("Repeted Numbers are -> "+arr);