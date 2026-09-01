// Status lookup table for all ProjectIdea instances.
const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"}
}

class ProjectIdea {
    // Each idea is a self-contained unit of state:
    // title, description, and current execution status.
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }

    // Allows external systems (like the board) to update the idea's status.
    updateProjectStatus(status) {
        this.status = status;
    }

}

class ProjectIdeaBoard {
    // The board is a container for multiple ProjectIdea objects.
    constructor(title) {
        this.title = title
        this.ideas = []
    }

    // Add a ProjectIdea instance to the board.
    pin(project) {
        this.ideas.push(project);
    }

    // Remove a specific ProjectIdea instance from the board.
    unpin (project) {
        this.ideas = this.ideas.filter(p => p !== project);
    }

    // Returns how many ideas are currently pinned.
    count() {
        return this.ideas.length
    }

    // Reflects the board's current state as a formatted string.
    formatToString() {
        // Empty board case
        if (this.ideas.length === 0) {
        return `${this.title} has 0 idea(s)\n`;
        }
        
        // Summary line for non-empty board
        const summary = `${this.title} has ${this.count()} idea(s)\n`;

        // Format each idea into the required FCC output shape.
        const formattedIdeas = this.ideas
          .map(idea => `${idea.title} (${idea.status.description}) - ${idea.description}\n`)
          .join("");
        
        // Final combined output
        return summary + formattedIdeas;
    }
}
