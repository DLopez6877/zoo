import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="edit-container" *ngIf="childSelectedAnimal">
      <div class="edit-wrapper" *ngIf="childSelectedAnimal">
        <div *ngIf="childSelectedAnimal">
          <h1>Edit {{childSelectedAnimal.name}}</h1>
          <div class="flex-form">
            <div class="form-section">
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
            </div>
            <div class="form-section">
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
            </div>
          </div>
          <button class="btn btn-default btn-lg btn-block" (click)="doneButtonClicked()">Done Editing</button>
        </div>
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
