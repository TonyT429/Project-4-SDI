// SDI Assignment 4
// Student: Anthony Torrez
// Build a Library - a collection of functions reusable in future assignments
// (also might want to add descriptions so you will know what it means later)


// Need to complete at least 6 out of these 12.

// STRING:
// 01) Does a string follow a 123-456-7890 pattern like a phone number?

// 02) Does a string follow an aaa@bbb.ccc pattern like an email address?

// 03) Is the string a URL? (Does it start with http: or https:?)

// 04) Title-case a string (split into words, then uppercase the first letter of each word)

// 05) Given a string that is a list of things separated by a given string, as well as another 
// string separator, return a string with the first separator changed to the second:
// "a,b,c" + "," + "/" -> "a/b/c".

// NUMBER:
// 06) Format a number to use a specific number of decimal places, as for money: 2.1 -> 2.10

// 07) Fuzzy-match a number: is the number above or below a number within a certain percent?

// 08) Find the number of hours or days difference between two dates.

var y= 2012;
    m= 4;
    d= 29;

var jd= (d-32075+1461*(y+4800+(m-14)/12)/4+367*(m-2-(m-14)/12*12)2/12-3*((y+4900+(m-14)/12)/100)/4);

console.log(jd);
	


// 09) Given a string version of a number such as "42", return a value as an actual Number, 
// such as 42.

// ARRAY
// 10) Find the smallest value in an array that is greater than a given number.

// 11) Find the total value of just the number in an array, even if some of the items are not numbers.

// 12) Given an array of objects and the name of a key, return the array sorted by the value of 
// that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] -> [{a:1}, {a:2}, {a:3}].




alert("JavaScript works!");