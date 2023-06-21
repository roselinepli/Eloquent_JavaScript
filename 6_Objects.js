var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");

function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");

speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "Oh my.");

var empty = {};
console.log(empty.toString);
console.log(empty.toString());

// A vector type
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
};
Vector.prototype.minus = function(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
};
Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
});

const vector1 = new Vector(1, 2);
const vector2 = new Vector(3, 4);

const sumVector = vector1.plus(vector2);
console.log(sumVector);

const diffVector = vector1.minus(vector2);
console.log(diffVector);

console.log(vector1.length);
console.log(vector2.length);

// Another cell
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
StretchCell.prototype.minWidth = function() {
    return Math.max(this.inner.minWidth(), this.width);
};
StretchCell.prototype.minHeight = function() {
    return Math.max(this.inner.minHeight(), this.height);
};
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height).padEnd(height, " ").slice(0, width);
};

const innerCell = new TextCell("Hello");
const StretchCell = new StretchCell(innerCell, 10, 3);

console.log(stretchCell.minWidth());
console.log(stretchCell.minHeight());
console.log(stretchCell.draw(12, 4));