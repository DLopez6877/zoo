import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <div class="container">
      <hr>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <hr>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Pacific Shores', 5, 'Female', 'Cool Shade', 'Loud Noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Africa', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Elephant', 'Junior', 4, 'Herbivore', 'Africa', 6, 'Male', 'Long walks on the beach', 'Kids'),
    new Animal('Hippo', 'Purpurp', 4, 'Carnivore', 'Pacific Shores', 6, 'Female', 'Candy', 'Ice Cream Sandwhiches'),
    new Animal('Polar Bear', 'John Stark', 4, 'Carnivore', 'Africa', 6, 'Male', 'Long Baths', 'Hot Sunny Days'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Great Northwest', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
