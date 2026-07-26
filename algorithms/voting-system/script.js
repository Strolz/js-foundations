const poll = new Map();

poll.set("Turkey", new Set());
poll.set("Beef", new Set());
poll.set("Ham", new Set());

const addOption = (option) => {
  if(!option) {
    return `Option cannot be empty.`
  }
  if(poll.has(option)) {
    return `Option "${option}" already exists.`
  }
  poll.set(option, new Set()); 
  return `Option "${option}" added to the poll.`
}

const vote = (option, voterId) => {
  if(!poll.has(option)) {
    return `Option "${option}" does not exist.`
  }

  const voters = poll.get(option);

  if(voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`
}

const displayResults = () => {
  let result = "Poll Results:\n";

  for (const [option, voters] of poll) {
    result += `${option}: ${voters.size} votes\n`;
  }

  return result.trim();
}

vote("Turkey", "v1");
vote("Turkey", "v2");
vote("Beef", "v3");
