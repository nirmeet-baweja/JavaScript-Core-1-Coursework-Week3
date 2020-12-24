/*
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

// function to remove a given word from the given sentence
function removeWord(sentence, word)
{
  if(sentence.search(word) < 0)
  {
    return undefined;
  }
  else
  {
    // part of the sentence before the word
    let firstSubString = sentence.substr(0, sentence.search(word)-1);

    // part of the sentence after the word
    let secondSubString = sentence.substr((sentence.search(word) + word.length), sentence.length);

    // return the combined sentence
    return firstSubString + secondSubString;
  }
}

let statement = "I do not like programming";

let wordToRemove = "not";

console.log(removeWord(statement, wordToRemove));

/* EXPECTED OUTPUT

  "I do like programming"

*/
