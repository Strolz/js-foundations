// Create a Map to store poll options and their voter Sets
const poll = new Map();

// Initialize poll with three options, each starting with an empty Set of voters
poll.set("Turkey", new Set());
poll.set("Beef", new Set());
poll.set("Ham", new Set());

// Add a new option to the poll
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

// Register a vote for a specific option
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

// Display poll results with vote counts
const displayResults = () => {
  let result = "Poll Results:\n";

  for (const [option, voters] of poll) {
    result += `${option}: ${voters.size} votes\n`;
  }

  return result.trim();
}

// Example votes
vote("Turkey", "v1");
vote("Turkey", "v2");
vote("Beef", "v3");
