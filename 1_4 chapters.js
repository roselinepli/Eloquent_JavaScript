for (var current = 20; ; current++) {
    if (current % 7 == 0)
    break;
}
console.log(current)


//Looping a triangle
let triangle = "";
for (let i = 1; i <= 7; i++) {
    triangle += "#";
    console.log(triangle);
}

//FizzBuzz
for (let i = 1; i<= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Chess board
function createChessboard(size) {
    let chessboard = '';

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
        // check if the position is even or odd to determine the character
        if ((row + col) % 2 === 0) {
            chessboard += ' ';
        } else {
            chessboard += '#';
        }
      }
      chessboard += '\n'; // Add a newline character after each row
    }
  return chessboard;
}

const size = 8;
const chessboard = createChessboard(size);
console.log(chessboard);

// exponent
var power = function(base, exponent) {
    var res = 1;
    for (var count = 0; count < exponent; count++)
    res *= base;
  return res;
};

console.log(power(2, 10));

//functions
var x = "outside";

var f1 = function() {
    var x = "inside f1";
};
f1();
console.log(x)
// -> outside

var f2 = function() {
    x = "inside f2";
};
f2();
console.log(x);
// -> inside f2

var landscape = function() {
    var res = "";
    var flat = function(size) {
        for (var count = 0; count < size; count++)
          res += "_";
    };
    var mountain = function(size) {
        res += "/";
        for (var count = 0; count < size; count++)
          res += "^";
        res += "\\";
    };
flat(3);
mountain(4);
flat(6);
mountain(1);
return res;
};

console.log(landscape());


function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

function power(base, exponent) {
    if (exponent == undefined)
      exponent = 2;
    var res = 1;
    for (var count = 0; count < exponent; count++)
      res *= base;
    return res;
}
console.log(power(4));
console.log(power(4, 3))


function wrapValue(n) {
    var localVariable = n;
    return function() { return localVariable; };
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
var twice = multiplier(2);
console.log(twice(5));

// Recursion
function power(base, exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * power(base, exponent - 1);
}
console.log(power(2, 3));


function findSolution(target) {
    function find(current, history) {
        if (current == target)
          return history;
        else if (current > target)
          return null;
        else
          return find(current + 5, "(" + history + " + 5)") ||
                 find(current * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}
console.log(findSolution(24));

function printFarmInventory(cows, chickens) {
    var cowString = String(cows);
    while (cowString.length < 3)
      cowString = "0" + cowString;
    console.log(cowString + " Cows");
    var chickenString = String(chickens);
    while (chickenString.length < 3)
      chickenString = "0" + chickenString;
    console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

function zeroPad(number, width) {
    var string = String(number);
    while (string.length < width)
      string = "0" + string;
    return string;
}
function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Cows");
    console.log(zeroPad(chickens, 3) + " Chickens");
    console.log(zeroPad(pigs, 3) + " Pigs");
}
printFarmInventory(7, 16, 3);

// Create a function value f
var f = function(a) {
    console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}

//Minimum
function mini(a, b) {
    if (a < b)
      return a;
    else
      return b;
};

// Recursion
function isEven(n) {
    if (n === 0){
      return true;}
    else if (n === 1){
      return false;}
    else if (n < 0) {
        return isEven(-n);
    }
    else return isEven(n-2);
}

// Count Beans
function countBs(string) {
    return countChar(string, "B");
}
function countChar(string, char) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            count ++;
        }
    }
    return count;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerkalak", "k"))

// methos
var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);

// weresquirrel
var day1 = {
    squirrel: false,
    events: ["work", "touched trees", "pizza", "running", "television"]
};
console.log(day1.squirrel)

var descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

var journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
     squirrel: true},
    /* and so on... */
];

// The sum of a range
// console.log(sum(range(1, 10)));
function range(start, end, step = 1) {
    var arr = []
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (var i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
    }

function sums(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
      return total;
}
console.log(sums(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

// Reversing an array
function reversArray(array) {
    var res = [];
    for (var i = array.length-1; i >= 0; i--) {
        res.push(array[i]);
    }
return res;
}
function reversArrayInPlace(array) {
    var left = 0;
    var right = array.length - 1;
    while (left < right) {
        var temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left ++;
        right --;
    }
    return array;
}
var array = [1, 2, 3, 4, 5];
console.log(reversArray(array));
console.log(reversArrayInPlace(array));

// Build A list from an array
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list;
}

// Convert a list to an array
function listToArray(list) {
    let arr = [];
    let node = list;
    while (node !== null) {
        arr.push(node.value);
        node = node.rest;
    }
    return arr;
}

// Prepend an element to a list
function prepend(element, list) {
    return {value: element, rest: list};
}

// Retrive the element at a given position in the list
function nth(list, position) {
    if (list === null) {
        return undefined;
    } else if (position === 0) {
        return list.value;
    } else {
        return nth(list.rest, position -1);
    }
}

// Recursive version of nth function
function nthRecursive(list, position) {
    if (list === null) {
        return undefined;
    } else if (position === 0) {
        return list.value;
    } else {
        return nthRecursive(list.rest, position -1);
    }
}
const arr = [1, 2, 3];
const list = arrayToList(arr);
console.log(list);

const arr2 = listToArray(list);
console.log(arr2)

const newList = prepend(0, list);
console.log(newList);

console.log(nth(list, 2));
console.log(nthRecursive(list, 2));