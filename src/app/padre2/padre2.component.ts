import { Component } from '@angular/core';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css']
})
export class Padre2Component {
  name: string = '';
  surname: string = '';
  dni: string = '';
  photo: string = '';
  doctors: any = [];

  showModal: boolean = false;

  showForm() {
    this.showModal = true;
  }

  addDoctor() {
    let doctor: any = {
      id: this.doctors.length + 1,
      name: this.name,
      surname: this.surname,
      dni: this.dni,
      photo: this.photo
    }
    this.doctors.push(doctor);
    this.name = '';
    this.surname = '';
    this.dni = '';
    this.photo = '';
    this.showModal = false;
  }
  rejectDoctor() {
    this.name = '';
    this.surname = '';
    this.dni = '';
    this.photo = '';
    this.showModal = false;
  }

}
