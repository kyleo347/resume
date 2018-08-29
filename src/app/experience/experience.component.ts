import { Component, OnInit, Input } from '@angular/core';

import { Searchable } from '../classes/searchable.class';
import { Job } from '../classes/job.class';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent extends Searchable implements OnInit {

  ngOnInit() {
    this._content = [
      new Job('Accenture', 'Software Developer Specialist', [
      'Architecting API framework to handle requests from both internal and external requests from SAP WebUI and Angular ',
      'Co-Led a team effort adapting a CRM solution to handle the needs of several Federal Agencies, managing billions in federal funds ',
      'Developed and maintained a web portal used by hundreds of federal employees ',
      'Designed from server side business logic up (ABAP and SQL) to front end Web UX (HTML, vanilla javascript)',
      'Completed projects using both Waterfall and Agile software development lifecycles' ]),
      new Job( 'Epic Systems', 'Technical Solutions Engineer', [
        'Implemented enterprise electronic medical records software at several healthcare organizations with millions of patients each',
        'Provided functional and technical expertise in the implementation of medical systems',
        'Lead analysis and recommended resolution of complex issues affecting the Health Information Management module',
        'Analyzed, cleaned, and loaded millions of patient records using data from legacy systems'
      ]),
      new Job( 'Bucknell University', 'Bachelor in Physics', [
        'Measured and analyzed radio telescope data to “weigh” the Milky Way galaxy',
        'Wrote in C++ for Computer Science capstone to create a traffic simulator and the Game of Life, among other things.',
        'Analyzed and modelled data in Wolfram Mathematica'
      ])
    ];
  }

}

