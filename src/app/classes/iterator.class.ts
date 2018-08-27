export class Iterator {
    data: Object | any[];

    constructor(data = {}) {
        this.data = JSON.parse(JSON.stringify(data));
     }

    add(key, value) { this.data[key] = value; }

    get(key) { return this.data[key]; }

    [Symbol.iterator]() {
        const keys = Object.keys(this.data).filter(key => this.data.hasOwnProperty(key));
        const values = keys.map(key => this.data[key]).values();
        return values;
    }
  }
