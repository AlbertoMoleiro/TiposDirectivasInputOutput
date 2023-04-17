import { Component } from '@angular/core';


@Component({
  selector: 'app-padre1',
  templateUrl: './padre1.component.html',
  styleUrls: ['./padre1.component.css']
})

export class Padre1Component {
  pacientes: any[] = [];

  addPerson(person: any){
    person.id = this.pacientes.length + 1;
    
    this.pacientes.push(person);
  }
}
