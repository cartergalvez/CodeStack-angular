import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  flip = false;
  constructor() { }

  ngOnInit() {
  }
  switch(){
    if(this.flip){
      this.flip = false;
    }else{
      this.flip = true;
    }
    
  }
  clickevent(){
    alert('you clicked me');
  }
}
