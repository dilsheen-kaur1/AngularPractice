import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>
     Hello {{name}} //this is known as internpolation as value is added on component render it is not static
  </h1>
  <h2>{{2+2}}</h2>//concatenation
  <h3>{{'Welcome '+ name}}</h3>//string concatenation
  <h4>{{name.length}}</h4>
  <h5>{{name.toUpperCase()}}</h5>
  <h2>{{greetUser()}}</h2>
  <h2>a=2+2</h2>//this is not allowed in interpolation(asssigning values)
  <h3>{{siteUrl}}</h3>
  <input [id]="myID" type="text" value="Harry">//property binding
  <input id="{{myID}}" type="text" value="Harry">//another way`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Tom"; 
  public siteUrl = window.location.href;
  public myID = "testId"
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello" + this.name;
  }

}

//We can write inline HTML as well in template url:
//template: '<h1>hello world</h1>',(use backticks for multiple HTML lines)

//We can write inline CSS as well in styleUrls
//styles: [`
//div{
//  color: red'
//}
//`]


// 3 ways to define a selector:
//     1. normal html selector
//     2. class selector:- 
//       selector: '.app-test',
//       in the HTML file use as
//         <div class="app-test"></div>
//     3. array selector:-
//       selector: '[app-test]'
//       in the HTML file use as
//         <div app-test></div>

//$0 represents current element

//attributes are defined by HTML and properties are defined by DOM
//attributes value cannot be changed whereas property values can be changed

//interpolation works on string only