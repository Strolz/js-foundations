
/*

1. You should have a whatIsInAName function.
2. whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
3. whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}].
4. whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}].
5. whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{"apple": 1, "bat": 2, "cookie": 2}].
6. whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }) should return [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]
7. whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return [].
8. whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}) should return [].

*/

function whatIsInAName(arr, obj) {

  /* Extract keys required for matching */
  const keys = Object.keys(obj);

  /* Matching Objects */
  return arr.filter(item => keys.every(key => item[key] === obj[key])
  );
}

