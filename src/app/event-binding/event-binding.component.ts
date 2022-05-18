import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClick($event)">Greet</button>//using handler
    <button (click)="greeting='Welcome'">Greet</button>
    {{greeting}}
    <br>
    <br>
    //Two Way binding
    <input [(ngModel)]="name" type="text">
    {{name}}
    <br>
    []:- for property/data binding from class to template
    ():- for event binding from template to class
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greeting = "";
  constructor() { }

  ngOnInit() {
  }
  onClick(event){
    console.log(event);
    this.greeting = 'world';
  }

}

// Event binding is necessary so that we can send data from template to class
//class to view is data binding &  view to class is event binding 