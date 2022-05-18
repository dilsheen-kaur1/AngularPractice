import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `  
    <h1 *ngIf="true">ngIf</h1>//h1 element is removed from DOM itself
    <h1 *ngIf="false">Assign a truthy or falsy value based on which it will render</h1>
    <h2  *ngIf="displayName">tom</h2>

    <h2 *ngIf="displayName; else elseBlock">harry</h2>

    <br>
    <br>
    <h1>or</h1>
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2>John</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>
    `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  displayName = true;
  constructor() { }

  ngOnInit() {
  }

}
