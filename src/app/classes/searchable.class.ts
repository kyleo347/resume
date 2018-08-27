import { Input } from '@angular/core';
import { Iterator } from './iterator.class';

export class Searchable {
    @Input() searchText = '';
    protected _content: object | any[] | Iterator;

    containsSearchText(content = this._content) {
        if (!content) { return false; }
        if (!this.searchText || this.searchText === '') { return true; }
        const keys = Object.keys(content).filter(prop => content.hasOwnProperty(prop));
        for (const key of keys) {
            if (typeof content[key] === 'string' || content[key] instanceof String) {
                if (content[key].toLowerCase().indexOf(this.searchText) >= 0) {
                    return true;
                }
            } else if (this.containsSearchText(content[key])) {
                return true;
            }
        }
        return false;
    }

    get content() {
        return this.get_content();
    }

    get_content(content = this._content) {
        if (!content) {
            return new Iterator(content);
          }
        const contentCopy = JSON.parse(JSON.stringify(content));
        const output = new Iterator();
        const keys = Object.keys(contentCopy).filter(prop => contentCopy.hasOwnProperty(prop));
        for (const key of keys) {
            if (typeof contentCopy[key] === 'string' || contentCopy[key] instanceof String) {
              output.add(key, contentCopy[key].replace(new RegExp(this.searchText, 'gi'), match => {
                return '<span class="highlightText">' + match + '</span>';
              }));
            } else if (this.containsSearchText(contentCopy[key])) {
                output.add(key, this.get_content(contentCopy[key]));
            }
          }
          return output;
    }
}

