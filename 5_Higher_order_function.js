var total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

// functions that create new functions
function greaterThan(n) {
    return function(m) {return m > n;};
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

//functions that change other functions
function noisy(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
noisy(Boolean)(0);

// functions that provide new types of control flow
function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}
repeat(3, function(n) {
    unless (n % 2, function() {
        console.log(n, "is even");
    });
});

//JSON: JavaScript Object Notation, a data storage and communication format
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);

//reduce function
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
    return current;
}
console.log(reduce([1, 2, 3, 4], function(a, b) {return a * b;}, 1));

var min = files[0];
for (var i = 1; i < ancestry.length; i++) {
    var cur = files[i];
    if (cur.born < min.born)
    min = cur;
}
console.log(min);

function average(array) {
    function plus(a, b) { return a + b;}
    return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));

// Flattening
function flattenArray(arrays) {
    return arrays.reduce(function(accumulator, curArray)
    {return accumulator.concat(curArray);}, []);}

const arrays = [[1, 2], [3, 4], [5, 6]];
const flatArray = flattenArray(arrays)
console.log(flatArray);

// Mother-child age difference
function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}
const mothers = ancestry.filter(function(person) {
    return byName[person.mother] !== undefined;
});
const ageDifference = mothers.map(function(person) {
    return person.born - byName[person.mother].born;
});
const averageAgeDifference = average(ageDifference);
console.log(averageAgeDifference);

// Every and then some
function every(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i])) {
            return false;
        }
    }
    return true;
}

function some(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return true;
        }
    }
    return false;
}

const numbers = [1, 2, 3, 4, 5];
const allPositive = every(numbers, function(number) {
  return number > 0;
});
console.log(allPositive);  // Output: true
const hasNegative = some(numbers, function(number) {
  return number < 0;
});
console.log(hasNegative);  // Output: false
