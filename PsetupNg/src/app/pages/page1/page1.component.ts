import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  trash:Student[] = [ 
    {
      fName : 'jon',
      lName : 'stewart',
      sName : 'johnstewart',
      pNumber : 4444444
    },
    {
      fName: 'lourn',
      lName: 'selga',
      sName: 'lrrrn',
      pNumber: 3333333
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
