import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
   <div class="form-group">
     <label>Species:</label>
     <input #newSpecies class="form-control">
   </div>
   <div class="form-group">
     <label>Name:</label>
     <input #newName class="form-control">
   </div>
   <div class="form-group">
     <label>Age:</label>
     <input type="number" #newAge class="form-control">
   </div>
   <div class="form-group">
     <label>Diet:</label>
     <input #newDiet class="form-control" placeholder="E.g. Carnivore">
   </div>
   <div class="form-group">
     <label>Location:</label>
     <select #newLocation class="form-control">
       <option value="Elephants Land">Elephants Land</option>
       <option value="Africa">Africa</option>
       <option value="Primal Forest">Primal Forest</option>
       <option value='Pacific Shores'>Pacific Shores</option>
       <option value="Discovery Zone">Discovery Zone</option>
       <option value="Great Northwest">Great Northwest</option>
     </select>
   </div>
   <div class="form-group">
     <label>Number of Caretakers:</label>
     <input #newCaretakers class="form-control" type="number">
   </div>
   <div class="form-group">
     <label>Gender:</label>
     <select #newSex class="form-control">
       <option value="Male">Male</option>
       <option value="Female">Female</option>
     </select>
   </div>
   <div class="form-group">
     <label>Animal's likes:</label>
     <input #newLikes class="form-control">
   </div>
   <div class="form-group">
     <label>Animal's dislikes:</label>
     <input #newDislikes class="form-control">
   </div>
   <div>
    <button class="btn btn-default" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string,) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
