import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  cars:string[] = [];
 carName  = "";
 carM:string[] = [];
 carModel = "";
 addCar(){
  this.cars.push(this.carName)
  this.carName= "";
  this.carM.push(this.carModel);
 this.carModel = "";
  console.log(this.cars)
  console.log(this.carM)
 }

}
