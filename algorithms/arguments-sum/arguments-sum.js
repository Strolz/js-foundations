function addTogether(a, b) {
    if (typeof a !== "number") {
      return undefined;
    }

    if (b !== undefined && b !== "number") {
      return undefined;
    }

    if (typeof b === "number") {
      return a + b;
    }
}
