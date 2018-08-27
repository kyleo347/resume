import { Component, OnInit, Input } from '@angular/core';
import { Searchable } from '../classes/searchable.class';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent extends Searchable  implements OnInit {

  ngOnInit() {
    this._content = {
      name: "Kyle O'Connor",
      title: "Fullstack Developer",
      description: "Fullstack Developer with experience in SAP, Python, and Angular."
    };
  }
}
