import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <h1>Zoo Animals Inventory</h1>
    <img src="resources/images/directional.png" id="directional">
    <a href="#list"><h3>Animal List</h3></a>
    <a href="#new"><h3>Add a new<br>   Animal</h3></a>
    <img src="resources/images/ranger.png" id="ranger">
    <img src="resources/images/sign.png" id="sign">
    <h2>Welcome to<br>The Oregon Zoo<h2>
  `
})

export class HeaderComponent {

}
