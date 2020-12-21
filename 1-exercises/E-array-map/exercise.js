// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

/******************************************************************************/
function times100(num)
{
  return num*100;
}

const firstTrialTimes100 = numbers.map(times100);
console.log(`This is the array generated by first method:${firstTrialTimes100}`);

/******************************************************************************/
const secondTrialTimes100 = numbers.map(function (num) {
  return num*100;
});
console.log(`This is the array generated by second method:${secondTrialTimes100}`);

/******************************************************************************/
const thirdTrialTimes100 = numbers.map(num => {
  return num*100;
});
console.log(`This is the array generated by third method:${thirdTrialTimes100}`);

/******************************************************************************/
const fourthTrialTimes100 = numbers.map(num => num*100);
console.log(`This is the array generated by fourth method:${fourthTrialTimes100}`);