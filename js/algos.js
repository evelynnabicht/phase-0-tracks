function Longest_Phrase(array_of_phrases) {

var longest_string = "";

  for (var i = 0; i < array_of_phrases.length; i++) {
    if (longest_string.length < array_of_phrases[i].length) {
      longest_string = array_of_phrases[i];
    }
  }
  return longest_string;
}




// test the functions for Longest Phrase
phrase_array = ["I love dogs","cats suck"];
console.log("The longest phrase of [" + phrase_array + "] is: " + Longest_Phrase(phrase_array) + ".");

phrase_array2 = ["do you believe in life after love","i can feel something inside me say","I really don't think you're strong enough no"];
console.log("The longest phrase of [" + phrase_array2 + "] is: " + Longest_Phrase(phrase_array2) + ".");

phrase_array3 = ["somebody once told me", "the world is gonna roll me", "I ain't the sharpest tool in the shed"];
console.log("The longest phrase of [" + phrase_array3 + "] is: " + Longest_Phrase(phrase_array3) + ".\n");