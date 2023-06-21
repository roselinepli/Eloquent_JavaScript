function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

function testVector() {
    var p1 = new Vector(10, 20);
    var p2 = new Vector(-10, 5);
    var p3 = p1.plus(p2);
    if (p1.x !== 10) return "fail: x property";
    if (p1.y !== 20) return "fail: y property";
    if (p2.x !== -10) return "fail: negative x property";
    if (p3.x !== 0) return "fail: x from plus";
    if (p3.y !== 25) return "fail: y from plus";
    return "everything ok";
}
console.log(testVector());

function numberToString(n, base) {
    var result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n /= base;
    } while (n > 0);
    return sign + result;
}
console.log(numberToString(13, 10));

for (;;) {
    try {
        var dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        console.log("Not a valid direction. Try again.");
    }
}

function InputError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";