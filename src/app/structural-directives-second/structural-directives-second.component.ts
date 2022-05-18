import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives-second',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">Red color</div>
      <div *ngSwitchCase="'green'">Green color</div>
      <div *ngSwitchCase="'orange'">Orange color</div>
    </div>
  `,
  styles: [`
    .red{
      color: red;
    }
    .green{
      color: green;
    }
    .orange{
      color: orange;
    }
  `]
})
export class StructuralDirectivesSecondComponent implements OnInit {

  public color = "red";
  constructor() { }

  ngOnInit() {
  }

}
