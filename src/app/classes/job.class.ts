export class Job {
    organization: string;
    title: string;
    tasks: string[];
    logo: string;
    image: string;

    constructor(organization, title, tasks, logo?, image?) {
      this.organization = organization;
      this.title = title;
      this.tasks = tasks;
      this.logo = logo;
      this.image = image;
    }
}
