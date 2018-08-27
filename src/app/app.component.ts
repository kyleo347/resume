import { Component } from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';

// import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
  searchText: string;

  constructor() {
    PageScrollConfig.defaultScrollOffset = 70;
  }

  search(searchText: string) {
    this.searchText = searchText;
  }
}
