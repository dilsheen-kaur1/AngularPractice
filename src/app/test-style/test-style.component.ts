import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-style',
  template: `
    //class binding
    <h1 [class]="red">Hello World</h1>
    <h2 [class.gray]="hasSuccess">New World</h2>
    <h3 [ngClass]="isMessage">Old world</h3>

    //style binding
    <h2 [style.color]="'orange'">John</h2>
    <h2 [style.color]="hasError ? 'purple' : 'green'">John</h2>
    <h2 [style.color]="highlightColor">John</h2>
    <h2 [ngStyle] = "titleStyles">DOe</h2>
    `,
  styles: [`
    .red{
      color:red;
    }
    .gray{
      color: gray;
    }
    .font-size-20{
      font-size: 20px;
    }
  `]
})
export class TestStyleComponent implements OnInit {

  public red = "red";
  public hasSuccess = true;
  public hasError = true;
  public isSpecial = true;
  public isMessage  = {
    "font-size-20": this.hasSuccess,
    "red": !this.hasError
  }
  public highlightColor = "pink";
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }
  constructor() { }

  ngOnInit() {
  }

}

//class binding is given more importance than normal class
