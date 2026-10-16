function addTogether(a, b) {
  if (typeof a !== "number") {
    return undefined;
  }

  if (arguments.length > 1 && typeof b !== "number") {
    return undefined;
  }

  if (typeof b === "number") {
    return a + b;
  }

  return function(c) {
    if (c !== "number") {
      return undefined;
    }

    return a + c;
  
  }
}
