const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"}
}

class ProjectIdea {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }

    updateProjectStatus(status) {
        this.status = status;
    }

}

class ProjectIdeaBoard {
    constructor(title) {
        this.title = title
        this.ideas = []
    }

    pin(project) {
        this.ideas.push(project);
    }

    unpin (project) {
        this.ideas = this.ideas.filter(p => p !== project);
    }

    count() {
        return this.ideas.length
    }

    formatToString() {
        if (this.ideas.length === 0) {
        return `${this.title} has 0 idea(s)\n`;
        }
    }
}
