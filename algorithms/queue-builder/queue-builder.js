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
