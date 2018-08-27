export class Job {
    organization: string;
    title: string;
    tasks: string[];

    constructor(organization, title, tasks) {
      this.organization = organization;
      this.title = title;
      this.tasks = tasks;
    }
}