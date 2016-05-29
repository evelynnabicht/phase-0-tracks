// Pseudocode a function to reverse a string
//take a string and reverse the order of the letters in it
// for each string entered into the function, an output of the reversed string will be implemented
//call on reverse_string method
//print output to console  



var reverse = ""

var reverse = function(str) {
for (var i = 0; i <= str.length; i ++) {

  reverse = reverse + str.charAt(str.length-(1+i));
}
if (1==1) {
  console.log(reverse);
}

}

reverse("assuh dude")


*********************************************************************************


// create code that will:
// take array of words (or phrases)
// get length of word/phrase
// compare string lengths 
// return the longest word/phrase
// driver code to test method


function find_longest(word_array) 
  {
    var longest_string = "";
    for (var i = 0; i < word_array.length; i++) {
      if (longest_string.length < word_array[i].length) {
      longest_string = word_array[i];
    }
  }
  return longest_string;
}

    }





  












// test the functions for longest word/phrase
string_array = ["long phrase","longest phrase","longer phrase"];
console.log("The longest phrase of [" + string_array + "] is: " + find_longest(string_array) + ".");

string_array2 = [];
console.log("The longest phrase of [" + string_array2 + "] is: " + find_longest(string_array2) + ".");

string_array3 = ["do you believe in life after love","i can feel something inside me say","I really don't think you're strong enough no"];
console.log("The longest phrase of [" + string_array3 + "] is: " + find_longest(string_array3) + ".\n");
