// Pseudocode a function to reverse a string
//take a string and reverse the order of the letters in it
// for each string entered into the function, an output of the reversed string will be implemented
//call on reverse_string method
//print output to console  



var reverse_string = ""

var reverse = function(str) {
for (var i = 0; i <= str.length; i ++) {

  reverse_string = reverse_string + str.charAt(str.length-(1+i));
}
if (1==1) {
  console.log(reverse_string);
}

}

reverse_string("hello")