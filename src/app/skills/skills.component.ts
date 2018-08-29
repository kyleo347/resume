import { Component, OnInit } from '@angular/core';
import { Searchable } from '../classes/searchable.class';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends Searchable implements OnInit {

  ngOnInit() {
    this._content = [
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'Python',
      'SQL',
      'Angular',
      'SDLC',
      'Agile'
    ];
  }

}
