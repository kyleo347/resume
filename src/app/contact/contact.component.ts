import { Component, OnInit } from '@angular/core';
import { Searchable } from '../classes/searchable.class';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends Searchable implements OnInit {

  ngOnInit() {
    this._content = [
      { type: 'Phone', value: '678.696.0347' },
      { type: 'Email', value: 'kyleoconnor347@gmail.com' },
      { type: 'Github', value: 'https://github.com/kyleo347'}
    ];
  }

}
