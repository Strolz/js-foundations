function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
 return queue.collection.push(element);
}

function dequeue(queue) {
  return queue.collection.shift();
}

function front(queue) {
  return queue.collection[0];
}
