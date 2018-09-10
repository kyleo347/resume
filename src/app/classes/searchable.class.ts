import { Input } from '@angular/core';
import { Iterator } from './iterator.class';

export class Searchable {
    @Input() searchText = '';
    protected _oldSearchText = '`';
    protected _content: object | any[] | Iterator;
    protected _oldContent: object | any[] | Iterator;

    isURL(value: string): boolean  {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
    }

    containsSearchText(content = this._content) {
        if (!content) { return false; }
        if (!this.searchText || this.searchText === '') { return true; }
        const keys = Object.keys(content).filter(prop => content.hasOwnProperty(prop));
        for (const key of keys) {
            if (typeof content[key] === 'string' || content[key] instanceof String) {
                if (content[key].toLowerCase().indexOf(this.searchText) >= 0) {
                    return true;
                }
            } else if (content[key] && this.containsSearchText(content[key])) {
                return true;
            }
        }
        return false;
    }

    get content() {
        if (this.searchText !== this._oldSearchText) {
            this._oldSearchText = this.searchText;
            this._oldContent = this.get_content();
        }
        return this._oldContent;
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
                if (this.searchText && content[key].charAt(0) !== '.' ) {
                    output.add(key, contentCopy[key].replace(new RegExp(this.searchText, 'gi'), match => {
                        return '<span class="highlightText">' + match + '</span>'; }));
                } else {
                  output.add(key, contentCopy[key]);
                }
            } else if (this.containsSearchText(contentCopy[key])) {
                output.add(key, this.get_content(contentCopy[key]));
            }
          }
          return output;
    }
}

