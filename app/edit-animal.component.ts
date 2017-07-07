import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.name}}</h3>
          <hr>
          <h3>Edit Animal</h3>
          <div class="form-group">
            <label>Species:</label>
            <input [(ngModel)]="childSelectedAnimal.species" class="form-control">
          </div>
          <div class="form-group">
            <label>Name:</label>
            <input [(ngModel)]="childSelectedAnimal.name" class="form-control">
          </div>
          <div class="form-group">
            <label>Age:</label>
            <input type="number" [(ngModel)]="childSelectedAnimal.age" class="form-control">
          </div>
          <div class="form-group">
            <label>Diet:</label>
            <input [(ngModel)]="childSelectedAnimal.diet" class="form-control" placeholder="E.g. Carnivore">
          </div>
          <div class="form-group">
            <label>Location:</label>
            <select [(ngModel)]="childSelectedAnimal.location" class="form-control">
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
            <input [(ngModel)]="childSelectedAnimal.caretakers" class="form-control" type="number">
          </div>
          <div class="form-group">
            <label>Gender:</label>
            <select [(ngModel)]="childSelectedAnimal.sex" class="form-control">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="form-group">
            <label>Animal's likes:</label>
            <input [(ngModel)]="childSelectedAnimal.likes" class="form-control">
          </div>
          <div class="form-group">
            <label>Animal's dislikes:</label>
            <input [(ngModel)]="childSelectedAnimal.dislikes" class="form-control">
          </div>
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }


}
