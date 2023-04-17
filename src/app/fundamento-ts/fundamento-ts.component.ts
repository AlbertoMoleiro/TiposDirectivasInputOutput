import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css']
})
export class FundamentoTSComponent {

  ejemplo1() {
    // Ejemplo1: Formas de declarar un Array
    const arrayDeNumeros: Array<number> = [1, 2, 3];
    const arrayDeStrings: Array<string> = ['a', 'b', 'c'];
    const arrayDeStrings2: string[] = ['a', 'b', 'c'];

    // Funciones principales de un Array
    // 1. push: Agrega un elemento al final del Array
    arrayDeNumeros.push(4);

    // 2. pop: Elimina el último elemento del Array
    arrayDeNumeros.pop();

    // 3. shift: Elimina el primer elemento del Array
    arrayDeNumeros.shift();

    // 4. unshift: Agrega un elemento al inicio del Array
    arrayDeNumeros.unshift(0);

    // 5. splice: Elimina un elemento en una posición específica del Array
    arrayDeNumeros.splice(1, 1); // Elimina el elemento en la posición 1
  }
  //---------------------------------------------------------------------------------

  //Ejemplo 2 de unión de tipos y un caso aplicativo (html , ts)
  color:"red" |"gree"|"blue"|"yellow" = 'blue';
  //Al aplicar la union de tipos, solo se podra seleccionar entre los valores que se le asignan


  //---------------------------------------------------------------------------------

  //Ejemplo 3 de enumeraciones con un caso aplicativo (html, ts)

  day: number = 0;

  message: string = '';
  //Comprueba si el número de día introducido es válido y muestra el nombre del día
  checkDay() {
    // Enumeración de días
    enum WeekDays {
      Monday = 1,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    }

    switch (this.day) {
      case WeekDays.Monday:
        this.message = 'Lunes';
        break;
      case WeekDays.Tuesday:
        this.message = 'Martes';
        break;
      case WeekDays.Wednesday:
        this.message = 'Miércoles';
        break;
      case WeekDays.Thursday:
        this.message = 'Jueves';
        break;
      case WeekDays.Friday:
        this.message = 'Viernes';
        break;
      case WeekDays.Saturday:
        this.message = 'Sábado';
        break;
      case WeekDays.Sunday:
        this.message = 'Domingo';
        break;
      default:
        this.message = 'El número introducido no corresponde a ningún día de la semana';
        break;
    }

  }

}
