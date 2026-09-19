const initStack = () => {
  return {
    collection: []
  }
}

const stack = initStack();

const push = (stack, element) => {
  stack.collection.push(element);
}

const pop = (stack, element) => {
  return stack.collection.pop()
}
