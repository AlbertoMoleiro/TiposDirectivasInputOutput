import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  //Ejemplo ngIf
  nota: number = 0;

  //Ejemplo ngFor
  products: Array<string> = [];
  product: string = '';

  addProduct() {
    this.products.push(this.product);
    this.product = '';
  }

  //Ejemplo ngSwitch
  day: number = 0;
}
