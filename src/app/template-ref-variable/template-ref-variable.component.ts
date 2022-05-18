import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-variable',
  template: `<
    <input #myInput type="text">//#myInput is reference variable
    <button (click)="logmessage(myInput.value)">Log</button>
  `,
  styleUrls: ['./template-ref-variable.component.css']
})
export class TemplateRefVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logmessage(value){
    console.log(value);
    
  }

}
