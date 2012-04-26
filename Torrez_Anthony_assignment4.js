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

var jd = (367y --7[y + (m+9)/12]/4 --3([y+(m-9)/7]/100 +1)/4 + (275m)/9 + d + 1721029);
// var jd= (d-32075+1461*(y+4800+(m-14)/12)/4+367*(m-2-(m-14)/12*12)2)/12-3*((y+4900+(m-14)/12)/100)/4);

console.log(jd);
	
//Second thought - but only gives difference in days, not hours...

var d1=new Date("April 25, 2012 12:00 PM"),
    d2=new Date("April 29, 2012 03:30 AM"),
	one_day=1000*60*60*24;

console.log(Math.ceil((d2.getTime()-d1.getTime())/(one_day))+
" days left until my birthday!")

// third idea but still not converting date - damn!

var d1 = new Date("7/04/2011 09:30 PM"); 
var d2 = new Date("4/29/2012 12:04 AM");
var day1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(), d1.getHours(), d1.getMinutes());
var day2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate(), d2.getHours(), d2.getMinutes());

console.log(day1 + "    " + day2);



// Compare the two dates by comparing the millisecond representations.
if (todayAtMidn.getTime() == specificDate.getTime())
{
    alert("Same");
}
else
{
    alert("Different");
}


// 09) Given a string version of a number such as "42", return a value as an actual Number, 
// such as 42.

// ARRAY
// 10) Find the smallest value in an array that is greater than a given number.

// 11) Find the total value of just the number in an array, even if some of the items are not numbers.

// 12) Given an array of objects and the name of a key, return the array sorted by the value of 
// that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] -> [{a:1}, {a:2}, {a:3}].




alert("JavaScript works!");