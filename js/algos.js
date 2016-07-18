

// take array of words or phrases
//  get length of each string
//  compare lengths of strings
//  return the longest word or phrase in array

function Longest_Phrase(array_of_phrases) {
var longest_string = "";
  for (var i = 0; i < array_of_phrases.length; i++) {
    if (longest_string.length < array_of_phrases[i].length) {
      longest_string = array_of_phrases[i];}
  }
return longest_string;
}


// create function for two objects 
// loop to pick each key from first object
// compare value from that key
// based off comparison, return true or false


function Key_Value_Match(object1, object2) {

var key_value_pair = false;
key_count = Object.keys(object1).length;
  for (var i = 0; i < key_count; i++) {
    key = Object.keys(object1)[i];
    if (object1[key] == object2[key]) {
      key_value_pair = true;
    }
  }
return key_value_pair;
}



// create function to accept a number of words to generate
// need character string for the alphabet
// For loop for the the number of words to generate
// For loop for generating random letters for a random length 1 to 10
// use alphabet sting w/ the index of the random length and store in a variable
// Save new string into an array
// Use array to drive for the longest phrase.
// return the longest phase


function Random_Test_Data(number_of_words) {
  word_result = [];
  for (var i=0; i<number_of_words; i++){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var string_length = Math.floor((Math.random() * 10) +1);
    randomstring = "";
    for (var x=0; x<string_length; x++) {
      var random_string_number = Math.floor(Math.random() * characters.length);
      randomstring += characters.substring(random_string_number,random_string_number+1);
    }
    word_result[i] = randomstring;
  }
  console.log("From these random words: " + word_result);
  var longest_random_word = Longest_Phrase(word_result);
  return longest_random_word;
}


// ********DRIVER CODES************


// test the functions for Longest Phrase
phrase_array = ["I love dogs","cats suck"];
  console.log("The longest phrase of [" + phrase_array + "] is: " + Longest_Phrase(phrase_array) + ".");

phrase_array2 = ["do you believe in life after love","i can feel something inside me say","I really don't think you're strong enough no"];
  console.log("The longest phrase of [" + phrase_array2 + "] is: " + Longest_Phrase(phrase_array2) + ".");

phrase_array3 = ["somebody once told me", "the world is gonna roll me", "I ain't the sharpest tool in the shed"];
  console.log("The longest phrase of [" + phrase_array3 + "] is: " + Longest_Phrase(phrase_array3) + ".\n");


// test the functions for Key-Value Match
first_object = {name: "Evelyn", age: 19};
second_object = {name: "Lauren", age: 20};
  console.log("Do these have similar key-value set?: ");
  console.log(first_object);  
  console.log(second_object);
  console.log("Answer: " + Key_Value_Match(first_object, second_object) + "\n");

first_object2 = {name: "Jessica", age: 21};
second_object2 = {cat: "Jordan", age: 4};
  console.log("Do these have similar key-value set?: ");
  console.log(first_object2);
  console.log(second_object2);
  console.log("Answer: " + Key_Value_Match(first_object2, second_object2) + "\n");


// test the random words generator
// include a for loop to generate results 10 times
for (var i=0; i<10; i++){
  console.log(Random_Test_Data(Math.floor((Math.random() * 10) +1)) + " is the longest word.\n");
}
