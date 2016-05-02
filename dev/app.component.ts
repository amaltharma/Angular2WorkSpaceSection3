import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {PropertyBindingComponent} from './property-binding.component'

@Component({
    selector: 'app',
    template: `
     <section class ="parent">
        <h2>This is the parent component </h2>
        <h4>Please enter your name</h4>
        <input type="text" [(ngModel)]="name">
        <br><br>
        <p>{{name}}</p>
        <section class="child">
            <my-property-binding [myName]="name" [myAge] = "26" (hobbiesChanged) = "hobbies = $event"></my-property-binding>
        </section>
      </section>
      <p>My hobbies are: {{hobbies}}<p>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent implements OnInit {
   hobbies: string
   ngOnInit() :any{

  }
}
