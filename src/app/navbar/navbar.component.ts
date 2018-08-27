import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/search.svg'));
  }

  ngOnInit() {
  }

  search(searchText: string) {
    this.searchEvent.emit(searchText.toLowerCase());
  }

}
