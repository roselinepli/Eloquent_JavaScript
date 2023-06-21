// \d Any digit character
// \w An alphanumeric character (“word character”)
// \s Any whitespace character (space, tab, newline, and similar)
// \D A character that is not a digit
// \W A nonalphanumeric character
// \S A nonwhitespace character
// . Any character except for newline
// /^\d+$/ matches a string consisting entirely of one or more digits
// /^!/ matches any string that starts with an exclamation mark
// /x^/ does not match anystring (there cannot be an x before the start of the string).
// \b A word boundary can be the start or end of the string or any point in the string
//  (+, *, ?, and {}) are greedy, they match as much as they can and backtrack from there
// put a question mark after them (+?, *?, ??, {}?), they become nongreedy and start by matching as little as possible

var re1 = new RegExp("abc");
var re2 = /abc/;

console.log(/[0123456789]/.test("in 1992"));

console.log("Borobudur".replace(/[r]/, "a"));
console.log("Borobudur".replace(/[or]/g, "a"));

var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
    return str.toUpperCase();
}));

var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) // only one left, remove the 's'
      unit = unit.slice(0, unit.length - 1);
    else if (amount == 0)
      amount = "no";
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("1 /* a */+/* b */ 1"));
console.log(stripComments("x = 10;// ten!"))

var name = "harry";
var text = "harry is a suspicious character.";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

console.log("  word".search(/\S/));

var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec("xyzzy");
console.log(match.index);
console.log(pattern.lastIndex);

function parseINI(string) {
  // Start with an object to hold the top-level fields
  var currentSection = {name: null, fields: []};
  var categories = [currentSection];

  string.split(/\r?\n/).forEach(function(line) {
    var match;
    if (/^\s*(;.*)?$/.test(line)) {
      return;
    } else if (match = line.match(/^\[(.*)\]$/)) {
      currentSection.push(currentSection);
    } else if (match = line.match(/^(\w+)=(.*)$/)) {
      currentSection.fields.push({name: match[1], value: match[2]});
    } else {
      throw new Error("Line '" + line + "' is invalid.");
    }
  });
  return categories;
}

// 1. car and cat -[rt] r or t
/ca[rt]/
// 2. pop and prop - ?: r zero or once
/pr?op/
// 3. ferret, ferry, and ferrari - The "|" represents the logical OR operator.
/ferr(et|y|ari)/
// 4. Any word ending in ious  - The "\b" ensures a word boundary. It prevents
// matching if there are additional characters immediately following the "ious" sequence.
// For example, it will match "delicious" but not "deliciously".
/\w+ious\b/
// 5. A whitespace character followed by a dot, comma, colon, or semicolon
/\s[.,:;]/
// 6. A word longer than six letters - Quantifiers like {7,} allow you to define the repetition
// behavior of the preceding element in a regular expression. They can specify a range of minimum
// and maximum occurrences, such as {min, max}, or just a minimum with no maximum like {min,}.
/\w{7,}/
// 7. A word without the letter "e":
/\b[^\We]+\b/i

//Quoting style
var story = "She said, 'I can't believe it!' and he replied, 'I know, it's amazing.'";

var updatedStory = story.replace(/(?<!\w)'|'(?!\w)/g, '"');

console.log(updatedStory);

//Numbers again
/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/
