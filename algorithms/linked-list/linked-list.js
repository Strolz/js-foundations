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
  }
  
  list.length++;
}

const myList = initList();
console.log(isEmpty(myList));
add(myList, 5);
console.log(myList);
console.log(isEmpty(myList));
