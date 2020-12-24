/*
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number
  - For the multiples of 5 print “Buzz”.
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

function printNum(num)
{
  // check if num is divisible by 3 or 5
  if((num % 3 === 0) || (num % 5 === 0))
  {
    //check if num is divisible by 3
    if(num % 3 === 0)
      console.log("Fizz");
    else
      // check if num is divisible by 5
      if(num % 5 === 0)
        console.log("Buzz");
      else // if we reach this else, it means num is divisible by both 3 and 5
        console.log("FizzBuzz");
  }
  else
    console.log(num);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arr.forEach(printNum);

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
