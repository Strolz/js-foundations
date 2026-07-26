const optionA = {
  name: "Turkey"
}

const optionB = {
  name: "Beef"
}

const optionC = {
  name: "Ham"
}

const poll = new Map();

poll.set("Turkey", new Set());
poll.set("Beef", new Set());
poll.set("Ham", new Set());

const addOption = (option) => {
  if(!option) {
    return `Option cannot be empty`
  }
  if(option.has(option)) {
    return `Option "${option}" already exists.`
  }
  poll.set(option, new Set()); 
  return `Option "${option}" added to the poll`
}

const vote = (option, voterId) => {
}
