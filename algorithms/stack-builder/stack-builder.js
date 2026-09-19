const initStack = () => {
  return {
    collection: []
  }
}

const stack = initStack();

const push = (stack, element) => {
  stack.collection.push(element);
}

const pop = (stack) => {
  return stack.collection.pop()
}

const peek = (stack) => {
  return stack.collection[stack.collection.length - 1];
}
