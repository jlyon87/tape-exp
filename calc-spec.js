var test = require("tape");
var calc = require("./calc.js");

test("Test calc.add()", function(t) {
	var run = calc.add;

	t.ok(run, "add function is okay");

	t.equals(typeof run, "function", "The typeof run is a function.");
	t.deepEquals(run(1, 1), new Number(2), "One plus one is two.");
	t.deepEquals(run(1, "a"), new Number(NaN), "One plus 'a' is Not a Number");

	t.end();
});

test("Test calc.subtract()", function(t) {
	var run = calc.subtract;

	t.ok(run, "subtract function is okay.");

	t.equals(typeof run, "function", "typeof run is a function");
	t.deepEquals(run(2, 1), new Number(1), "Two minus one is zero.");
	t.deepEquals(run(2, "a"), new Number(NaN), "Two minus 'a' is Not a number.");

	t.end();
});
