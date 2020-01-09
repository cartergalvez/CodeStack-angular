import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  trash = [
    {
      title:'my project 1', desc:'trash',nFo:'something',

    },
    {
      title: 'my project 2', desc: 'trash2', nFo: 'something2',

    },
    {
      title: 'my project 3', desc: 'trash3', nFo: 'something3',

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
