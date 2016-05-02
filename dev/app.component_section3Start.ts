import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
      {{onTest()}}
      <input type="text" [value]="name" [ngClass]="{red: true}" (keyup)="onKeyup(inputElement.value)" #inputElement>
      <p>{{values}}</p>
      <br>
      <br>
      <input type="text" [(ngModel)] = "name">
      <p>Your Name: {{name}}</p>
    `
})
export class AppComponent implements OnInit {
 name : string;
 values = '';
  ngOnInit() :any{
  this.name = "";
  }

 onTest(){
  return "First Name:";
 }

 onKeyup(value: string) {
  this.values += value + ' | ';
 }
}
