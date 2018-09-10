export class Project {
    name: string;
    repo: string;
    demo: string;
    image: string;

    constructor(name: string, repo: string, demo: string, image: string = '../../assets/projectIcon.png') {
        this.name = name;
        this.repo = repo;
        this.demo = demo;
        this.image = image;
    }
}
