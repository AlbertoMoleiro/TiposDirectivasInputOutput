import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})

export class Hijo1Component {
  name: string = '';
  surname: string = '';
  dni: string = '';
  phone: string = '';
  address: string = '';
  email: string = '';

  @Output() sendPerson = new EventEmitter<any>();

  addPerson() {
    let person: any = {
      name: this.name,
      surname: this.surname,
      dni: this.dni,
      phone: this.phone,
      address: this.address,
      email: this.email
    }

    this.sendPerson.emit(person);
    
    this.name = '';
    this.surname = '';
    this.dni = '';
    this.phone = '';
    this.address = '';
    this.email = '';
  }
  rejectPerson() {
    this.name = '';
    this.surname = '';
    this.dni = '';
    this.phone = '';
    this.address = '';
    this.email = '';
  }
}
