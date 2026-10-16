function addTogether(a, b) {
  if (typeof a !== "number") {
    return undefined;
  }

  if (b !== undefined && typeof b !== "number") {
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
