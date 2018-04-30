// Write an expression that matches only JavaScript-style numbers.
// It must support an optional minus or plus sign in front of the number,
// the decimal dot, and exponent notation—5e-3 or 1E10— again with an optional
// sign in front of the exponent. Also note that it is not necessary for there
// to be digits in front of or after the dot, but the number cannot be a dot alone.
//  That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t.

/////////////////////////// NUMBER 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Fill in this regular expression.
let number = /^((\d+)|(\.\d+)|(\d+\e?(\d+)?)|(\d\e(-|\+)?(\d+)?)|(\d+\.(\d+)?\e?(-|\+)?(\d+)?)|((-|\+)\d+\.?\d?\e?))$/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}

/////////////////////////// NUMBER 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Fill in this regular expression.
let number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

// Tests:
for (let str of ["1", "-1234", "+15.5", "1.5e5", ".5", "5.",
                 "1.3e212", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}