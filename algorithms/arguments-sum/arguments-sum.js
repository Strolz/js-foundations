function addTogether(a, b) {
  if (typeof a !== "number") {
    return undefined;
  }

  // If two arguments were passed, validate b
  if (arguments.length > 1 && typeof b !== "number") {
    return undefined;
  }

  // If both arguments are valid numbers, return their sum
  if (typeof b === "number") {
    return a + b;
  }

  // Otherwise return a function that expects the second number
  return function(c) {
    if (c !== "number") {
      return undefined;
    }

    return a + c;
  
  }
}
