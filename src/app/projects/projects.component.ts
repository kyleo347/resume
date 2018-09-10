import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project.class';
import { Searchable } from '../classes/searchable.class';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent extends Searchable implements OnInit {
  projects: Project[];
  ngOnInit() {
    this.projects = [
      new Project('React Checkers', 'https://github.com/kyleo347/checkers', 'http://react-checkers.s3-website-us-west-2.amazonaws.com/', '../../assets/checkers.png'),
      new Project('Planet of the Day', 'https://github.com/kyleo347/apod', '', '../../assets/apod.jpg'),
      new Project('Redux Graph', 'https://github.com/kyleo347/salesGraph', 'http://salesgraph.s3-website-us-west-2.amazonaws.com', '../../assets/salesGraph.png')
    ];
    this._content = {
      projects: this.projects,
      tags: 'projects github demo'
    };
  }

}
