// create two arrays
var colors = ["Red", "Orange", "Yellow", "Green"];
var names = ["Ed", "Fred", "Ted", "Jed"];

// add info to arrays
colors.push("Blue");
names.push("Fernando");

// use arrays to create objects 
var obj = {}

colors.map( function( value, index ) {
    obj[ value ] = names[ index ];
});

