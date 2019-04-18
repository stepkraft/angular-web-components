import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'app-test-elm',
  templateUrl: './test-elm.component.html',
  styleUrls: ['./test-elm.component.scss'],
  encapsulation: ViewEncapsulation.Native,
})
export class TestElmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
