import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

import {Title} from '../providers/title';

@Component({
  selector: 'home',
  directives: [ ...FORM_DIRECTIVES ],
  providers: [ Title ],
  pipes: [ ],
  styles: [ require('./result.css') ],
  template: require('./result.html')
})
export class Result {
  // TypeScript public modifiers
  constructor(public title: Title, public http: Http) {
  }

  ngOnInit() {
    console.log('hello Home');
  }

}
