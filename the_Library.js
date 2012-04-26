// SDI Assignment Week 4
// my Library file
// Student: Anthony Torrez
// Date: April , 2012

// #04 

function propCase() {
    return chgStr.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

propCase()

// #05

function myStr () {
    var re = /,/gi;  
    var getStr = aStr;
    var newStr = str.replace(re, "/");
    return newStr;
    }
myStr()	


// #08

function tweenDays() {
    var aDay = (1000 * 60 * 60 * 24);
    daysTween = (Math.ceil((d2.getTime()-d1.getTime())/(aDay)));
    return daysTween;
    }
tweenDays()

// #09

function numChk () {
    var isNum = parseInt(nuStr)
    return isNum;
    }
numChk()

