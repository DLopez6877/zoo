import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div id="list">
      <h1>ANIMALS IN THE ZOO</h1>
      <select (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngAnimals">Young Animals</option>
        <option value="matureAnimals">Mature Animals</option>
      </select>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <tr>
            <th>Species</th>
            <th>Name</th>
            <th>Age</th>
            <th>Diet</th>
            <th>Location</th>
            <th>Caretakers</th>
            <th>Gender</th>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Edit</th>
          </tr>
          <tr *ngFor="let currentAnimal of childAnimalList | agePipe:desiredView">
            <td>{{currentAnimal.species}}</td>
            <td>{{currentAnimal.name}}</td>
            <td>{{currentAnimal.age}}</td>
            <td>{{currentAnimal.diet}}</td>
            <td>{{currentAnimal.location}}</td>
            <td>{{currentAnimal.caretakers}}</td>
            <td>{{currentAnimal.sex}}</td>
            <td>{{currentAnimal.likes}}</td>
            <td>{{currentAnimal.dislikes}}</td>
            <td><button class="btn btn-default" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></td>
          </tr>
        </table>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  desiredView: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }


  onChange(optionFromMenu) {
    this.desiredView = optionFromMenu;
  }

}
