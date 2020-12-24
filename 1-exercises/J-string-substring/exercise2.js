/*
  You are given an array with a list of names.

  You should log only the peoples first names.

  For example, if the name is "John Smith" you should return "John"
*/

let names = [
  "Tamzin Lindsay",
  "Jessica Tate",
  "Tony Holcomb",
  "Shae Patton",
  "Arron Graham",
];

for(let i=0; i < names.length; i++)
{
  // Extract the first name from the name
  let firstName = names[i].split(" ", 1).join();

  // Overwrite the name to contain only the first name
  names[i] = names[i].substring(0, firstName.length);
}


names.forEach((name) => {
  console.log(name);
});

/* EXPECTED OUTPUT

  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"

*/
