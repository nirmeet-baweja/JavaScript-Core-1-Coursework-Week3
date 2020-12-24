/*
  You are given an statement

  You should remove the word "and dogs" by using substring
*/

let statement = "I like programming and dogs";

// words to be removed from the end of the statement
let wordsToRemove = " and dogs";

// overwrite the statement with the updated statement
statement = statement.substring(0, (statement.length - wordsToRemove.length));

console.log(statement);

/* EXPECTED OUTPUT

  "I like programming"

*/
