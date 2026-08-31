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

    pin() {

    }

    unpin () {

    }

    count() {

    }

    formatToString() {

    }
}
