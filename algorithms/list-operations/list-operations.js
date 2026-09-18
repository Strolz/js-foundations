const initList = () => {
  return {
    head: null,
    length: 0
  }
}

const isEmpty = (list) => {
  return list.length === 0;
}

function add(list, element) {
  const node = {
    element: element,
    next: null
  };

  if(isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while(current.next !== null) {
      current = current.next;
    };
    current.next = node;
  }
  
  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while(current !== null && current.element !== element) {
    previous = current;
    current = current.next
  }

  if(current === null) {
    return;
  }

  if (previous !== null) {
    previous.next = current.next
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;

  while (current !== null) {
    if (current.element === element) return true;
    current = current.next;
  }

  return false;
}

function getAt(list, index) {
  let current = list.head;

  if (index < 0 || index >= list.length) return undefined;

  for (let i = 0; i < index; i++) {
      current = current.next;
  }

  return current.element;
}

function insertAt(list, index, element) {
  let current = list.head;
  if (index < 0 || index > list.length) return undefined;
  
  const node = { element, next: null };

  if (index === 0) {
    node.next = current;
    list.head = node;
  } else {
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  list.length++;
  return;
}

function removeAt(list, index) {
  let current = list.head;
  if (index < 0 || index > list.length) return undefined;

  if(index === 0) {
    list.head = list.head.next;
    list.length--;
    return;
  } else {
    for (let i = 0; i < index - 1; i++) {
      current = current.next; 
    }
      current.next = current.next.next;
  }
  
  list.length--;
  return;
}
